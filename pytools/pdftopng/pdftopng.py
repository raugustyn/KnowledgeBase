#  -*- coding: utf-8 -*-
__author__ = "radek.augustyn@email.cz"
# http://manpages.ubuntu.com/manpages/trusty/man1/pdftocairo.1.html

import os, codecs
from PIL import Image
from subprocess import Popen, PIPE
from json import dump, dumps, load
from pygeotoolbox.sharedtools import extractFileName, pathWithLastSlash, setupEncoding, saveJSONtoJavaScript
import pygeotoolbox.sharedtools.log as log

READ_IMAGE_SIZE = False

class Convertor:

    def __init__(self, popplerPath, outputDir):
        self.outputDir = outputDir
        self.popplerPath = popplerPath
        self.forceCreatePNGs = False
        self.docInfos = load(open("DocsInfo.json", "r"))


    def pdfToPNG(self, pdfFileName):
        imageNameBase = pdfFileName.replace(".pdf", '')
        if self.outputDir:
            imageNameBase = self.outputDir + extractFileName(imageNameBase)
        imageName = imageNameBase + ".png"

        if self.forceCreatePNGs or not os.path.exists(imageName):
            command = self.popplerPath + 'pdftocairo -singlefile -png -f 1 -l 1 "%s" "%s"' % (pdfFileName, imageNameBase)
            proc = Popen(command, stdout=PIPE, stderr=PIPE)
            out, err = proc.communicate()

        if READ_IMAGE_SIZE:
            image = Image.open(imageName)
            width, height = image.size
        else:
            width = None
            height = None

        return (imageName, width, height)


    def convertDir(self, dirInfo, recursive=True):
        if isinstance(dirInfo, basestring):
            dirPath = dirInfo
            labels = []
        else:
            dirPath, labels = dirInfo

        dirPath = pathWithLastSlash(dirPath)
        msg = "Processing directory %s" % dirPath
        if self.outputDir:
            msg += "=> " + self.outputDir

        log.openSection(msg)
        for itemName in os.listdir(dirPath):
            fullItemName = dirPath + itemName
            if os.path.isfile(fullItemName) and itemName.endswith(".pdf"):
                log.info(itemName)
                imageName, width, height = self.pdfToPNG(fullItemName)
                itemLabels = labels[:]
                if itemName.endswith("Slides.pdf"):
                    itemLabels.append("Slides")

                caption = itemName.replace(".pdf", '')
                item = {
                    "caption": caption,
                    "labels": itemLabels
                }

                if READ_IMAGE_SIZE:
                    item["previewImage"] = {
                        "fileName": imageName,
                        "width": width,
                        "height": height
                    }

                if caption in self.docInfos:
                    item.update(self.docInfos[caption])

                self.items.append(item)

            elif os.path.isdir(fullItemName):
                self.convertDir((fullItemName, labels), recursive)
        log.closeSection()


    def execute(self, sourceDirData, recursive=True):
        self.items = []
        for sourceDirData in sourceDirData:
            self.convertDir(sourceDirData, recursive=True)

        itemsFileName = "C:/Users/Radek Augustyn/Desktop/KnowledgeBase/src/Boards/PreviewGallery/references.js"
        log.info(itemsFileName)

        saveJSONtoJavaScript(self.items, "references", itemsFileName, True)
        #dump(self.items, codecs.open(itemsFileName, "w", "utf-8"), indent=4)


if __name__ == "__main__":
    setupEncoding()
    c = Convertor("./poppler-0.68.0/bin/", 'C:/Users/Radek Augustyn/Desktop/KnowledgeBase/public/References/')
    c.execute([
        "C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/",
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/ICA Tutorial Paris", ["ICA Tutorial Paris"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/NMA_ICA Barcelona", ["NMA ICA Barcelona"]),
        ("C:/ms4w/Apache/htdocs/Generalizace/GenBackups/Zaloha_27.4/02_Meetings/07_ICA_Amsterodam/presentations_ICA_EuroSDR_workshop", ['NMA ICA Amsterdam']),
        ("C:/ms4w/Apache/htdocs/Generalizace/GenBackups/Zaloha_27.4/02_Meetings/13_ESRISwiss_April2016/01_Outputs", ['NMA ESRI Swiss']),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/Sedlcany/20181010-Southampton", ["NMA ESRI Southampton"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/13_ICA Zurrich", ["ICA Zurrich"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/15_ICA_Istanbul", ["ICA Istanbul"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/16_ICA Dresden", ["ICA Dresden"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/17_ICA Vienna", ["ICA Vienna"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/18_ICA Rio", ["ICA Rio"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/19_ICA Helsinki", ["ICA Helsinki"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/20_ICA Washington", ["ICA Washington"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/Agent", ["Agent Project"]),
        ("C:/Users/Radek Augustyn/Desktop/Gen II/ToStudy/Model Generalization", ["Model Generalization"])
    ])
