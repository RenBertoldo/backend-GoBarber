import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplate implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplate;
