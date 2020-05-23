import IParseMailProviderDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplate implements IMailTemplateProvider {
  public async parse({ template }: IParseMailProviderDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplate;
