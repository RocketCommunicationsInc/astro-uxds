---
path: /community/content-policy
date: Last Modified
layout: interior.template.njk
title: "Content Policy"
# remove next line when policy is approved
eleventyExcludeFromCollections: true
---

# AstroUXDS<nolink>.com Content Policy v0.1

**DRAFT** | _Submitted for EGS review June 2020_

## Policy Principles:

1.  Developers, designers, and others using the Astro User Experience Design System should be able to easily access and understand the information they need to design and develop space apps.
2.  Astro UXDS content editors should be able to easily and predictably manage content changes.
3.  The Astro UXDS content management process should not seem opaque, untimely, reactive, or inconsistent to designers, developers, and other primary users.
4.  Due to the nature of our work, Astro UXDS content has a much longer shelf-life than typical web guidelines or frameworks. Wherever possible, we will be transparent about previous versions of Astro, which users may be working with well into the future.

## Content states:

Ultimately, all Astro UXDS documentation content exists in one of 4 states:

1.  **Current** (canonical, effective, supported), 'master' branch
2.  **Draft** (proposed, open for comment, alpha, beta). e.g., 'compliance' and 'next' branches
3.  **Deprecated** (archived, renamed, obsolete, no longer recommended or supported ) e.g., Spectrum Analyzer
4.  **Deleted** (hidden, moved, no longer available, published in error, redacted)

Further distinctions are unhelpful noise to the customer seeking to build Astro UXDS-based applications. Additional commentary regarding the program's state and pipeline is far more effectively communicated through official channels to the directly responsible points of contact at EGS and not to be published on [AstroUXDS.com](http://astrouxds.com). However, there is an opportunity in future program increments to explore opportunities to publicize what's coming in future Astro UXDS releases given additional development resources.

### 1\. Current Content

By default, all content available on AstroUXDS.com will reflect what is on the master branch of the Astro Components repo. This content is considered current, canonical, supported, and effective. Published content should not be used to warn readers of possible future changes, as this may share an incomplete and often inaccurate picture of our pipeline and priorities. Instead, deprecate out-of-date content and replace it with content of current value to the user.

### 2\. Draft Content

Occasionally, AstroUXDS contributors will draft content and/or components and make those changes available for review or comment. If the content is of a sensitive nature or could create confusion by being made public before official adoption, it can be published to a unique, unlisted subdomain rather than the public site for the benefit of program management and EGS review. On a separate branch, Astro UXDS contributors may display and revise draft content freely until it has been made canonical by merging into master and publishing to AstroUXDS.com. Take care to remember that all branches of the Astro website and components are publicly accessible, as the repo is a public open source project. 

### 3\. Modified or Deprecated Content

As the years of AstroUXDS development and maintenance count up, contributors continually uncover opportunities for guidance or implementations to be improved or removed for the sake of clarity. These situations provide a use case where original content must be maintained for posterity, while adjusting recommendations and content to continually improve the Astro UXDS. Except in rare cases where content must be deleted (see below), AstroUXDS content that **has changed in intent since its first publish** -- beyond editorial corrections such as typos and grammar -- is to be classified as deprecated, at either the page or section level:

#### 3.1. Deprecating entire pages, patterns or components

To retire the recommendation of a pattern, maintenance of a component, or other page-level content, AstroUXDS contributors should identify the page as deprecated using the deprecated attribute in the markdown file's YAML front matter[¹](#footnote-1). Setting the page's deprecated attribute to true will enable the unlisted state for this page, which allows those who already have or can find the link to still visit the page. In the deprecated state, the page will also have a distinct banner notifying visitors that the content is deprecated. Existing AstroUXDS pages that link to the deprecated page can continue to link to the page if the advice is still current. The deprecated page will no longer be listed in site-wide navigation. It will be removed from the sitemap[²](#footnote-2) and given a noindex[³](#footnote-3) tag, so as to dissuade search engine robots from continuing to list this content in search results. The page will still be findable via the site-wide search.

#### 3.2. Significantly modified content on an existing page

The organization of AstroUXDS page content should always begin with the most current, canonical information. Modified content which is no longer applicable for the current Astro release should be appended at the end of the page in bulleted lists organized by the release or version where the content was applicable.

#### 3.3. Minor modifications of existing content on an existing page

For grammar or typographic changes or **clarifications that do not change the intent** of the guidance or a property, name, or method of a component, the content may be edited freely without annotation.

### 4\. Deleted Content

In rare situations, it is necessary to completely delete content from AstroUXDS. Such situations include **content published due to human or technical error** (such as publishing prior to receiving approval), **content that includes private, confidential, or secure information**, or information became redundant over time. Where the original content is superseded by content existing elsewhere on the site, AstroUXDS should refer users to the more useful content, consolidating information in one place. 

As a record of all content ever published continues to exist indefinitely in git repo histories, if truly sensitive data such as application keys were accidentally published, it is not enough to just remove the content in a new commit. See [recommendations for removing sensitive data from a repository](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository) in such a situation.

#### 4.1. Deleting entire pages

If a page was published in error or contained information that should not have been made public, the AstroUXDS contributors should remove the markdown file and any links to the file (including listing the page in the nav file). This is essentially an "undo" publish action, and removes the page from nav and sitemap. Double-check all links across the site to make sure no page on AstroUXDS.com links to the now removed content, which will result in a 404 error if visited.

If the entirety of the page content is superseded by another AstroUXDS page (such as the renaming or merging of components), the URL for the page to be removed should redirect to the superseding page. All revision history from the removed page should be moved to the superseding page, with an explanation to the user of the change in the revision list, and remove the old page's markdown file. Finally, the content manager should list the old path, followed by the superseding page path, in the [AstroUXDS.com](http://AstroUXDS.com) repo's _redirects file [as per Netlify's instructions](https://docs.netlify.com/routing/redirects/)). This will create an automatic 301 (permanent) redirect to the new page, and remove the page from navigation and sitemap as well as search engine and site-wide search results.

#### 4.2. Removing content from a page

If content was published in error or contained information that should not have been public, it can be safely removed with no annotation or comment in a revision table.

Content which has been removed from one page in favor of superseding content on another page should be noted in the page's revision table (see section for [Significantly modified content on an existing page](#3.2.-significantly-modified-content-on-an-existing-page) above.)

<br>

---

<br>

**Footnotes**


1\. <a name="footnote-1"></a>**YAML front matter** --- the [AstroUXDS.com](http://AstroUXDS.com) website content management framework is 11ty, which uses Markdown files to define pages. Markdown files have YAML front matter, which are metadata variables for the page which 11ty uses to apply the correct page templates and other attributes when building the site.

2\. <a name="footnote-2"></a>**Sitemap.xml** --- this is a list of all viable pages in an XML format, which is usually submitted to search engines to enable better indexing of the entire content. It is not a user-consumable list of pages.

3\. <a name="footnote-3"></a>**Noindex** --- this is an HTML tag in the HEAD of the document indicating to search engines that the publisher does not desire this page to be indexed, and asks that the page not be included in search results.