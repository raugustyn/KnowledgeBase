import os
from json import load, dumps
from pygeotoolbox.sharedtools import Container, getFileExtension, extractFileName, pathLeaf, saveJSONtoJavaScript
import pygeotoolbox.sharedtools.log as log

config = Container({
    "basePath": "C:/ms4w/Apache/htdocs/Generalizace/webCartographersKnowledge/Ontologies/",
    "dataFileExtension": ".json"
})


class Importer:
    def __init__(self):
        self.cards = []


    def getCard(self, jsonFileName):
        if os.path.exists(jsonFileName):
            content = load(open(jsonFileName, "r"))
            result = {
                "cardType": "KnowledgeBaseCard",
                "caption": content["caption"]["text"],
                "description": content["description"]["text"]
            }
            self.cards.append(result)
            return result
        else:
            return None


    def processFile(self, fileName, ref):
        log.openSection("Processing file %s as %s" % (extractFileName(fileName), ref) )
        card = self.getCard(fileName)
        card["ref"] = ref
        log.info(card["caption"])
        log.closeSection()

        return card


    def processPath(self, path, ref="", recurse=True):
        log.openSection("Importing directory %s as %s" % (path, ref))
        containerCard = None
        containerCardName = pathLeaf(path) + ".cs.json"
        childern = []
        for name in os.listdir(path):
            itemPath = path + os.sep + name
            itemRef = ref + "/" + name
            if os.path.isdir(itemPath):
                if recurse:
                    subDirCard = self.processPath(itemPath + os.sep, itemRef)
                    if subDirCard ==  None:
                        pass
                    else:
                        childern.append(subDirCard["ref"])
            else:
                if getFileExtension(name.lower()) == config.dataFileExtension:
                    card = self.processFile(itemPath, itemRef)
                    if containerCard == None:
                        containerCard = card
                        containerCard["ref"] = ref

        if containerCard:
            containerCard["childern"] = childern

        log.closeSection()

        return containerCard


if __name__ == "__main__":
    importer = Importer()
    importer.processPath(config.basePath)

    saveJSONtoJavaScript(importer.cards, "cards", "C:\Users\Radek Augustyn\Desktop\Knowledge Base\src\Cards\CardsDB.js")


