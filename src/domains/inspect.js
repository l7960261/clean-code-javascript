import {
    codes,
    list
} from "../data/inspect.data";

export class Inspect {

    constructor() {
        this.btnStatus = '';
        this.systemCodes = codes;
        this.originList = list;
    }

    selectABAndBB() {
        this.systemCodes = ['AB001-01', 'BB001-01'];
    }

    selectBC() {
        this.systemCodes = ['BC001-01'];
    }

    selectBCAndCD() {
        this.systemCodes = ['BC001-01', 'CD001-01'];
    }

    buttonChange() {
        let appdataCount = 0,
            cicdCount = 0,
            inspectCount = 0;
        this.systemCodes.map(systemCode => {
            const filterList = this.originList.filter(data => data.WebSite === systemCode);
            appdataCount = filterList.map(data => data.AppdataStatus)[0] ? appdataCount : appdataCount + 1;
            cicdCount = filterList.map(data => data.CICDStatus)[0] ? cicdCount : cicdCount + 1;
            inspectCount = filterList.map(data => data.CheckStatus)[0] ? inspectCount : inspectCount + 1;
        });
        const systemCodeCount = this.systemCodes.length;
        if (systemCodeCount === appdataCount && appdataCount > 0) {
            this.btnStatus = 'appdata';
        } else if (systemCodeCount === cicdCount && cicdCount > 0 && appdataCount < 1) {
            this.btnStatus = 'cicd';
        } else if (systemCodeCount === inspectCount && inspectCount === 1 && appdataCount < 1 && cicdCount < 1) {
            this.btnStatus = 'inspect';
        } else {
            this.btnStatus = '';
        }
    }
}