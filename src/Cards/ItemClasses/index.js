import Registry from "./registry"
import RegistryItem from "./registryitem"

import CardNameEditor from "../CardNameEditor"
import DescriptionEditor from "../DescriptionEditor"
import DateTimeEditor from "./Editors/DateTimeEditor"
import SectionButtonDef from "./SectionButtonDef"

let registry = new Registry([
    new RegistryItem("Name", CardNameEditor, null, "Card name", "", false),
    new RegistryItem("Description", DescriptionEditor, null, "Description", "", false),
    new RegistryItem("Labels", DateTimeEditor, null, "Labels", "", false, new SectionButtonDef(null, "\uE937")),
    new RegistryItem("Discussions", DateTimeEditor, null, "Discussions", "", false, new SectionButtonDef(null, "\uE919")),
    new RegistryItem("Checklist", DateTimeEditor, null, "Checklist", "", true, new SectionButtonDef(null, "\uE913")),
    new RegistryItem("Due", DateTimeEditor, null, "Due Date", "", false, new SectionButtonDef(null, "\uE916")),
    new RegistryItem("Attachement", DateTimeEditor, null, "Attachement", "", true, new SectionButtonDef(null, "\uE937"))
])

export default registry
