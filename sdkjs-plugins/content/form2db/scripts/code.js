((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        window.Asc.plugin.executeMethod('GetAllForms');

        // console.log(JSON.stringify(allForms));
    };
})(window, undefined);
