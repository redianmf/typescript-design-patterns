interface IWebPage {
  header: string;
  footer: string;
  sidebar: string;
  content: string;
}

interface IWebPageBuilder {
  setHeader(header: string): IWebPageBuilder;
  setFooter(footer: string): IWebPageBuilder;
  setSidebar(sidebar: string): IWebPageBuilder;
  setContent(content: string): IWebPageBuilder;
  build(): IWebPage;
}

class WebPage implements IWebPage {
  constructor(
    public header: string,
    public footer: string,
    public sidebar: string,
    public content: string
  ) {}
}

class WebPageBuilder implements IWebPageBuilder {
  private header = '';
  private footer = '';
  private sidebar = '';
  private content = '';

  setHeader(header: string): IWebPageBuilder {
    this.header = header;
    return this;
  }
  setFooter(footer: string): IWebPageBuilder {
    this.footer = footer;
    return this;
  }
  setSidebar(sidebar: string): IWebPageBuilder {
    this.sidebar = sidebar;
    return this;
  }
  setContent(content: string): IWebPageBuilder {
    this.content = content;
    return this;
  }
  build(): IWebPage {
    return new WebPage(this.header, this.footer, this.sidebar, this.content);
  }
}

class WebPageDirector {
  constructor(private builder: IWebPageBuilder) {}

  public buildStandardWebsite(header: string, footer: string, content: string) {
    return this.builder
      .setHeader(header)
      .setFooter(footer)
      .setContent(content)
      .build();
  }
}

export default function builder() {
  const builder: IWebPageBuilder = new WebPageBuilder();
  const director: WebPageDirector = new WebPageDirector(builder);

  const standardWebPage: IWebPage = director.buildStandardWebsite(
    'Tokopedia',
    '© 2009 - 2024, PT. Tokopedia.',
    'Flash sale'
  );

  console.log(standardWebPage);
}
