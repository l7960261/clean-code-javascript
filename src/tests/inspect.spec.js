import {
    Inspect
} from "../domain/inspect";

describe('Inspect', () => {
    let instance;

    beforeEach(() => {
        instance = new Inspect();
    });

    it('buttonChange() use data/inspect.data.js will get "appdata"', () => {
        instance.buttonChange();

        expect(instance.btnStatus).toBe('appdata');
    });

    it('buttonChange() when use AB001-01 and BB001-01 will get "cicd"', () => {
        instance.selectABAndBB();
        instance.buttonChange();

        expect(instance.btnStatus).toBe('cicd');
    });

    it('buttonChange() when use BC001-01 will get "inspect"', () => {
        instance.selectBC();
        instance.buttonChange();

        expect(instance.btnStatus).toBe('inspect');
    });

    it('buttonChange() when use BC001-01 and CD001-01 will get ""', () => {
        instance.selectBCAndCD();
        instance.buttonChange();

        expect(instance.btnStatus).toBe('');
    });
});