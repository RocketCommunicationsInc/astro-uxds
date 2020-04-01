---
tags: resources
path: /patterns/classification-markings
date: Last Modified
layout: interior.template.njk
title: Classification Markings
---

# Classification Markings

Classification markings are required for applications and other mediums created for government clients interacting with classified information. Although there are documents that list the officially required list of classification markings, the multiple, long documents can be difficult to navigate for information specific to digital applications. In these documents there is a catch-all rule that indicates that any electronic medium should require the same markings as a physical document as is reasonable. However, how one determines what is reasonable versus necessary is not well-defined and has been implemented in completely different ways across different applications in the experiences of our clients, their users, and Rocket employees. This report gathers the information from multiple sources to provide an overview of the classification marking information relevant to the UI design of classified government software.

::: note
Note: These guidelines are focused on the use of and rules for classification markings in electronic application designs for government clients. Information about markings for emails, PowerPoints, or other mediums like printed documents can be found in the linked resources at the end of the page.
:::

## Officially Required

Information regarding what is officially required for classification markings of electronic applications can be found spread throughout the documents we gathered from clients and official online security resources. A list of the documents and materials we used to create this report can be found in the References section at the end of this report. As we mentioned above, the rules for classification markings are primarily focused on physical documents, but also apply to information in an electronic environment. To be more specific, electronic information should be marked with a banner line of overall classification, portion markings, and a classification authority block. When the information cannot be marked with all of these elements, a warning must be present to explain that the information cannot be used for derivative classification purposes and to provide a contact for any questions.

### Overall Classification - Banner Lines

The first element of required classification markings is the overall classification which is to be shown as a banner at the top and bottom of the classified document that shows the classification level centered in the middle of the banners in all capital letters. The banners should show the highest level of classification within that page or view of the document. If there is a title page, then the banners on that page should show the highest level of classification within the whole document. The classification level itself must be spelled out completely (example: UNCLASSIFIED instead of just U), but later caveats or control markings in the classification text can be abbreviated in their traditional formats or spelled out completely (example: FOUO or For Official Use Only). The structure of the caveats that go into this text can be seen in the following text and figures. Note that the words in the structure example below are just placeholders and that the actual caveat text could be longer or shorter than what is displayed.

##### Example with Banner Lines from DoDDM 5200.01, Volume 2

See the red text in all capital letters at the top and bottom of the document.

![Example of Originally Classified Document](/img/patterns/classification-markings-originally-classified-doc.png)

##### Marking Structure for Overall Classification from DoDDM 5200.01, Volume 2

CLASSIFICATION//SCI//SAP//AEA//FGI//DISSEM//OTHER DISSEM

![Marking Structure](/img/patterns/classification-markings-marking-structure.png)

### Portion Marking

The second required marking for classified documents is portion marking. A portion is anything in a document that has a separate classification from other elements of the document. We have included a more technical definition from DoDM 5200.01, Volume 2 below since this concept is often misunderstood:

> Every portion (e.g., subject, title, paragraphs, sections, tabs, attachments, classified signature blocks, bullets, tables and pictures) in every classified document shall be marked to show the highest level of classification that it contains. When deciding whether a subportion is to be treated as a portion and separately marked, the criterion shall be whether the marking is necessary to avoid over-classification of any of the information or to eliminate doubt about the information’s classification level. If there are different levels of classification among a portion and any of its subportions, then all subportions shall be treated as individual portions and marked separately.

Properly portion marking is very important in order to reduce classification problems and leaks. It is equally important to show which portions are Unclassified to enable better communication between teams and teammates with different levels of security clearance. This is true for blog entries, bulletin board postings, comments, chat rooms, and other similar items as well. These types of items require an overall classification marking for the whole container as well as individual portion markings for each entry.

#### Standard Requirements

Portion markings shall appear at the beginning of each portion so that the relevant text is always immediately to the right of the mark. Portion markings should be all capital letters and abbreviated within parentheses like (U//FOUO), but can also be spelled out in full if desired. Note that control markings such as SCI, SAP, AEA, or dissemination are also required in portion markings if they are relevant to that portion. The DoDM 5200.01, Volume 2 has a few more rules for specific cases that are quoted below:

> (1) For numbered or lettered paragraphs or subparagraphs, the portion marking goes after the number or letter, and before the text.
> 
> (2) Portion markings for listings of references, enclosures, tabs, or attachments (e.g., as listed on memorandums or transmittal documents) shall be placed before the subject or title and shall indicate the classification of that subject or title, not the classification of the document.
> 
> (3) Charts, graphs, photographs, illustrations, figures, drawings, and similar portions within classified documents must be marked to show their classification. The classification shall be based on the information contained in or revealed by the item. The portion marking shall be placed immediately preceding the chart, graph, etc., or within the item and shall be large enough to ensure viewers easily recognize it. Captions or titles of these portions must also be marked, as for text, and will indicate the classification of the caption or title, not of the portion (e.g., chart or graph) itself. The portion marking may be placed within the chart, graph, etc., and/or spelled out instead of being abbreviated when that more clearly identifies the classified status of the item. When possible, the marking should be integral to the item, so it is carried along with the item upon extraction.
> 
> (4) A classified signature block shall be portion marked to reflect the highest classification level of the information contained within the signature block itself.

For those developing applications/websites, there are also rules about portion marking URLs and metadata. To learn more about these aspects, please review the requirements in the DoDM 5200.01, Volume 2 and the ISOO Implementing Directive as linked at the bottom of the page.

##### Example of Portion Marking from DoDM 5200.01, Volume 2

![Example of FOUO Marking in a Classified Document](img/patterns/classification-markings-FOUO-marking-in-classified-doc.png)

##### Examples of Portion Marking from ISOO Marking Handbook

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

![Example of Paragraph and Diagram Marking](img/patterns/classification-markings-diagram.png)

![Example of Bullet Point Markings](img/patterns/classification-markings-bullets.png)

##### Examples of Portion Marking Text from DoDM 5200.01, Volume 2

![Examples of Portion Markng Text](img/patterns/classification-markings-portion-marking-text.png)

#### Exceptions

There are few exceptions to the portion mark rules, but the Information Security Oversight Office (ISOO) does acknowledge that different types of documents such as “dynamic documents,” a category that many applications or databases fall under, may have difficulty with these requirements. In general, the ruling seems to be that if a document is not portion marked fully, the document needs to have a waiver from the ISOO and an indication on the document that it cannot be used as a derivative source document with contact information for any questions. We have included quotes below about the mentioned portion marking exception cases to avoid oversimplifying any technical aspects.

##### Use a Separate Statement Elsewhere on the Page for Impracticable Marking Locations

> If an exceptional situation makes individual markings of each portion clearly impracticable, a statement may be substituted describing which portions are classified and their level of classification. This statement shall identify the information as specifically as parenthetical portion marking. When classification is a result of compilation, the statement required by section 12 of this enclosure meets this requirement. A waiver is not required in these situations. 

\- DoDM 5200.01, Volume 2

##### Obtain an ISOO-Approved Waiver and Display a Derivative Classification Warning

> A document not portion marked based on an ISOO-approved waiver must: 
>
>(1) Contain a warning which states that the document may NOT be used as a source for derivative classification.
>
>(2) Be portion marked when transmitted outside the originating organization, unless the ISOO waiver approval explicitly provides otherwise.

\- DoDM 5200.01, Volume 2

##### Show a Dynamic Document Warning at the Top of Each Page

**Note:** It is unclear from the documentation if an ISOO-approved waiver is necessary in conjunction with a dynamic document warning. This should be explored if the company wishes to pursue this option.

>If there is a mechanism for determining the actual classification markings for dynamic documents, the appropriate classification markings shall be applied to and displayed on the document…
>
>If such a mechanism does not exist, the highest classification level of information within the data source (e.g., database) shall be used and a warning shall be applied at the top of each page of the document. Such content shall NOT be used as a basis for derivative classification. An example of such a warning is shown in Figure 19. 
>
> ![Warning Statement for Dynamic Documents](img/patterns/classification-markings-warning-statement-for-dynamic-documents.png)
>
> (a) The warning is to alert users that there may be elements of information that may be either unclassified or classified at a lower level than the highest possible classification of the information returned. 
>
> (b) Users should consult classification guide(s) and/or the data source owner (i.e., the organization with primary responsibility for the content of the database or other data source) or the specified point of contact for the classification of individual elements in order to avoid unnecessary or over-classification and/or other impediments to information sharing.
>
> (c) The data source owner shall ensure classification guidance and points of contact are available to assist users with these inquiries.

\- DoDM 5200.01, Volume 2

### Classification Authority Block

Whenever classified information is present, there needs to be a method to trace the source of the classification and any necessary clarifications about declassify dates or classification reasons. The classification authority block is typically in the bottom left of the page, but can be moved according to layout needs. Similarly, if necessary in the layout, the authority information for electronic material may appear as a single line of text instead of the typical three line approach seen in the examples below. When entering dates in the block, use the standard format of YYYYMMDD. Note that there is a slightly different structure for originally classified documents and documents with a classification derived from another document. If the page pulls information from multiple derivation sources, use “Multiple Sources” in the “Derived From:” line and include or annotate the list of sources on the derivative document. 

If your application is able to move forward with the use of authority blocks, review the relevant sections in the references at the end of this report since there are many other rules for specific use cases. If it is not possible to show this information, as is true in many dynamic documents, a dynamic document warning (the same as mentioned in the Portion Marking section) should be present at the top of each page to warn the user not to use the content as a source for derivative classification and to give contact information.


#### Structure for Original vs. Derivative Classification Blocks from the ISOO Marking Booklet

![Summary of Classification Authority Block](img/patterns/classification-markings-authority-block.png)

#### Example of Original Classification in Context from DoDM 5200.01, Volume 2

![Example of Originally Classified Document](img/patterns/classification-markings-originally=classified-doc.png)

#### Example of Derivative Classification in Context from DoDM 5200.01, Volume 2

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

![Example of Derivatively Classified Document](img/patterns/classification-markings-derivatively-classified.png)

#### Repeat of the Dynamic Document Warning for Quick Reference

![Warning Statement for Dynamic Documents](img/patterns/classification-markings-warning-statement-for-dynamic-documents.png)

## Actual Implementation

Coming soon...
