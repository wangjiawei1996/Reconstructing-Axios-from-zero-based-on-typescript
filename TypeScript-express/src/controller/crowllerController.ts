import { Request, Response } from "express";
import "reflect-metadata";
import { controller, get, post } from "./decorator";
import { getResponseData } from "../utils/util";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

@controller
class CrowllerController {
  @get("/getData")
  getData(req: BodyRequest, res: Response) {
    const secret = "secretKey";
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = Analyzer.getInstance();
    new Crowller(url, analyzer);
    res.json(getResponseData(true));
  }
}
