((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        // const oDocument = Api.GetDocument();
        // const allForms = oDocument.getAllForms();
        // console.log(allForms);

        window.Asc.plugin.executeMethod('GetAllForms', () => {
            console.log('i run');
        });
        // window.Asc.plugin.onMethodReturn = () => {
        //     console.log("Running from onmethodreturn", window.Asc.plugin.info)
        // }
    };
})(window, undefined);
