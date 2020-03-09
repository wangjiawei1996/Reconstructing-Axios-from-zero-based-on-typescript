import { Analyzer } from "./crowller";
export default class WeiAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}
