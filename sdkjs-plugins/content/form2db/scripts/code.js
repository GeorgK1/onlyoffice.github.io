((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        window.Asc.plugin.executeMethod('GetAllForms', (res) => {
            console.log(res);
        });

        // console.log(JSON.stringify(allForms));
    };
})(window, undefined);
