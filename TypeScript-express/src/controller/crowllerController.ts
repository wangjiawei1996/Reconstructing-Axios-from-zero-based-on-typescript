import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { controller, get, post } from "./decorator";
import { getResponseData } from "../utils/util";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}
const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录"));
  }
};
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
