((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        window.Asc.plugin.executeMethod('GetAllForms');
        window.Asc.plugin.onMethodReturn = () => {
            console.log("Running from onmethodreturn", window.Asc.plugin.info)
        }
        // console.log(JSON.stringify(allForms));
    };
})(window, undefined);
