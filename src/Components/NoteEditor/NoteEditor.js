import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism"
import StatusLine from "./StatusLine"
import "./NoteEditor.css"


export default class NoteEditor extends Component {

    constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.noteText = "### Header 3\n" +
        "\n" +
        "Po odkliknutí se sice vymaže příslušný Badge, ale odškrtne se následující tlačítko. Asi proto, že se někde vevnitř generuje uprostřed překselení událost onclick.\n" +
        "\n" +
        "- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported\n" +
        "- [x] list syntax required (any unordered or ordered list supported)\n" +
        "- [x] this is a complete item\n" +
        "- [ ] this is an incomplete item\n" +
        "\n" +
        "First Header | Second Header\n" +
        "------------ | -------------\n" +
        "Content from cell 1 | Content from cell 2\n" +
        "Content in the first column | Content in the second column\n" +
        "\n" +
        "\n" +
        "### Javascript Code\n" +
        "```javascript\n" +
        "function fancyAlert(arg) {\n" +
        "  if(arg) {\n" +
        "    $.facebox({div:'#foo'})\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported\n" +
        "- [x] list syntax required (any unordered or ordered list supported)\n" +
        "- [x] this is a complete item\n" +
        "- [ ] this is an incomplete item\n" +
        "package org.locationtech.jts.geom;\n" +
        "\n" +
        "### Java Code\n" +
        "```java\n" +
        "import java.io.Serializable;\n" +
        "import java.util.Comparator;\n" +
        "\n" +
        "import org.locationtech.jts.util.Assert;\n" +
        "import org.locationtech.jts.util.NumberUtil;\n" +
        "\n" +
        "public class Coordinate implements Comparable<Coordinate>, Cloneable, Serializable {\n" +
        "\n" +
        "  private static final long serialVersionUID = 6683108902428366910L;\n" +
        "  public static final double NULL_ORDINATE = Double.NaN;\n" +
        "  public static final int X = 0;\n" +
        "  public static final int Y = 1; \n" +
        "  public static final int Z = 2;\n" +
        "  public static final int M = 3;  \n" +
        "  public double x;\n" +
        "  public double y;  \n" +
        "  public double z;\n" +
        "\n" +
        "  /**\n" +
        "   *  Constructs a <code>Coordinate</code> at (x,y,z).\n" +
        "   *\n" +
        "   *@param  x  the x-ordinate\n" +
        "   *@param  y  the y-ordinate\n" +
        "   *@param  z  the z-ordinate\n" +
        "   */\n" +
        "  public Coordinate(double x, double y, double z) {\n" +
        "    this.x = x;\n" +
        "    this.y = y;\n" +
        "    this.z = z;\n" +
        "  }\n" +
        "  \n" +
        "}```\n" +
        "\n" +
        "### Python Code\n" +
        "```python\n" +
        "import os\n" +
        "\n" +
        "print os.path.exists(\"/tmp\")\n" +
        "```"


    this.state = { activeTab: '2' };
  }

  markdownItems(noteText) {
        const codeSeparator = "```"
      const supportedLanguageKeys = ['javascript', 'python', 'java']
      let items = noteText.split(codeSeparator)
      let result = []
      for (var item of items) {
          let language = undefined
          if (noteText.indexOf(codeSeparator + item + codeSeparator) >= 0) {
              for (var languageKey of supportedLanguageKeys) {
                  if (item.indexOf(languageKey) === 0) {
                      language = languageKey
                      item = item.slice(languageKey.length)
                      break
                  }
              }
          }

          if (language) {
              result.push(<SyntaxHighlighter language={language} style={darcula}>{item}</SyntaxHighlighter>)
          }
          else {
              result.push(<ReactMarkdown source={item} />)
          }
      }

      return result
  }

  onChangeNoteText(event) {
        this.noteText = event.target.value
    }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

    render() {
        const CLASS_NAMES = {
            true: "active",
            false: ""
        }

        const markdownItems = this.markdownItems(this.noteText)
        return (
            <div>
                      <div>
                          <markdown-toolbar htmlFor="new_comment_field" className="toolbar-commenting no-wrap ">
                              <div className="d-inline-block mr-3 ">
                                  <md-header tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                             aria-label="Add header text"
                                             data-ga-click="Markdown Toolbar, click, header" role="button">
                                      <svg className="octicon octicon-text-size" viewBox="0 0 18 16" version="1.1"
                                           width="18" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"></path>
                                      </svg>
                                  </md-header>

                                  <md-bold tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                           aria-label="Add bold text <ctrl+b>"
                                           data-ga-click="Markdown Toolbar, click, bold" role="button" hotkey="b">
                                      <svg className="octicon octicon-bold" viewBox="0 0 10 16" version="1.1" width="10"
                                           height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path>
                                      </svg>
                                  </md-bold>

                                  <md-italic tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                             aria-label="Add italic text <ctrl+i>"
                                             data-ga-click="Markdown Toolbar, click, italic" role="button" hotkey="i">
                                      <svg className="octicon octicon-italic" viewBox="0 0 6 16" version="1.1" width="6"
                                           height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"></path>
                                      </svg>
                                  </md-italic>
                              </div>

                              <div className="d-inline-block mr-3 ">
                                  <md-quote tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                            aria-label="Insert a quote" data-ga-click="Markdown Toolbar, click, quote"
                                            role="button">
                                      <svg className="octicon octicon-quote" viewBox="0 0 14 16" version="1.1"
                                           width="14" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"></path>
                                      </svg>
                                  </md-quote>

                                  <md-code tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                           aria-label="Insert code" data-ga-click="Markdown Toolbar, click, code"
                                           role="button">
                                      <svg className="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14"
                                           height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path>
                                      </svg>
                                  </md-code>

                                  <md-link tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                           aria-label="Add a link <ctrl+k>"
                                           data-ga-click="Markdown Toolbar, click, link" role="button" hotkey="k">
                                      <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                                           height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                                      </svg>
                                  </md-link>
                              </div>

                              <div className="d-inline-block mr-3 ">
                                  <md-unordered-list tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                                     aria-label="Add a bulleted list"
                                                     data-ga-click="Markdown Toolbar, click, unordered list"
                                                     role="button">
                                      <svg className="octicon octicon-list-unordered" viewBox="0 0 12 16" version="1.1"
                                           width="12" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z"></path>
                                      </svg>
                                  </md-unordered-list>

                                  <md-ordered-list tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                                   aria-label="Add a numbered list"
                                                   data-ga-click="Markdown Toolbar, click, ordered list" role="button">
                                      <svg className="octicon octicon-list-ordered" viewBox="0 0 12 16" version="1.1"
                                           width="12" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M12.01 13c0 .59 0 1-.59 1H4.6c-.59 0-.59-.41-.59-1 0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1h.01zM4.6 4h6.81C12 4 12 3.59 12 3c0-.59 0-1-.59-1H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1zm6.81 3H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1h6.81C12 9 12 8.59 12 8c0-.59 0-1-.59-1zm-9.4-6h-.72c-.3.19-.58.25-1.03.34V2h.75v2.14H.17V5h2.84v-.86h-1V1zm.392 8.12c-.129 0-.592.04-.802.07.53-.56 1.14-1.25 1.14-1.89C2.72 6.52 2.18 6 1.38 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38.28 0 .48.16.48.52 0 .53-.77 1.2-1.7 2.06V10h3v-.88h-.598zm-.222 3.79v-.03c.44-.19.64-.47.64-.86 0-.7-.56-1.11-1.44-1.11-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56.83 0 1.53-.41 1.53-1.16 0-.5-.31-.81-.77-.94v.01z"></path>
                                      </svg>
                                  </md-ordered-list>

                                  <md-task-list tabindex="-1" className="toolbar-item tooltipped tooltipped-n"
                                                aria-label="Add a task list"
                                                data-ga-click="Markdown Toolbar, click, task list" role="button"
                                                hotkey="L">
                                      <svg className="octicon octicon-tasklist" viewBox="0 0 16 16" version="1.1"
                                           width="16" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z"></path>
                                      </svg>
                                  </md-task-list>
                              </div>

                              <div className="d-inline-block">
                                  <md-mention tabindex="-1" className="toolbar-item tooltipped tooltipped-nw"
                                              aria-label="Directly mention a user or team"
                                              data-ga-click="Markdown Toolbar, click, mention" role="button">
                                      <svg className="octicon octicon-mention" viewBox="0 0 14 16" version="1.1"
                                           width="14" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z"></path>
                                      </svg>
                                  </md-mention>

                                  <md-ref tabindex="-1" className="toolbar-item tooltipped tooltipped-nw"
                                          aria-label="Reference an issue or pull request"
                                          data-ga-click="Markdown Toolbar, click, reference" role="button">
                                      <svg className="octicon octicon-bookmark" viewBox="0 0 10 16" version="1.1"
                                           width="10" height="16" aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path>
                                      </svg>
                                  </md-ref>

                                  <details
                                      className="details-reset details-overlay toolbar-item select-menu select-menu-modal-right js-saved-reply-container"
                                      tabIndex="-1">
                                      <summary tabIndex="-1" className="menu-target" aria-label="Insert a reply"
                                               data-ga-click="Markdown Toolbar, click, saved reply"
                                               aria-haspopup="menu">
                                          <svg className="octicon octicon-reply" viewBox="0 0 14 16" version="1.1"
                                               width="14" height="16" aria-hidden="true">
                                              <path fill-rule="evenodd"
                                                    d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z"></path>
                                          </svg>
                                          <span className="dropdown-caret"></span>
                                      </summary>
                                      <details-menu
                                                    className="select-menu-modal position-absolute right-0 js-saved-reply-menu"
                                                    data-menu-input="new_comment_field_saved_reply_id"
                                                    src="/settings/replies?context=issue" preload="" role="menu">
                                          <div className="select-menu-header d-flex">
                                              <span className="select-menu-title flex-auto">Select a reply</span>
                                              <code><span className="border rounded-1 p-1 mr-2">ctrl .</span></code>
                                          </div>
                                          <include-fragment role="menuitem"
                                                            className="select-menu-loading-overlay anim-pulse"
                                                            aria-label="Loading">
                                              <svg className="octicon octicon-octoface" viewBox="0 0 16 16"
                                                   version="1.1" width="16" height="16" aria-hidden="true">
                                                  <path fill-rule="evenodd"
                                                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path>
                                              </svg>
                                          </include-fragment>
                                      </details-menu>
                                  </details>
                              </div>
                          </markdown-toolbar>
                      </div>

                <Nav tabs>
                  <NavItem>
                    <NavLink className={CLASS_NAMES[this.state.activeTab === '1']} onClick={() => { this.toggleTab('1'); }}>Write</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={CLASS_NAMES[this.state.activeTab === '2']} onClick={() => { this.toggleTab('2'); }}>Preview</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                      <div className="PostEditor">
                        <textarea onChange={this.onChangeNoteText.bind(this)}>{this.noteText}</textarea>
                      </div>

                      <StatusLine />
                  </TabPane>
                  <TabPane tabId="2">
                      {markdownItems}
                  </TabPane>
                </TabContent>
                <Button color="primary">Comment</Button>
            </div>
        )
    }
}
