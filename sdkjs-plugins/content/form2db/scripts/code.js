((window, undefined) => {
    window.Asc.plugin.init = () => {
        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            if (data) {
                for (const id of data) {
                    const internalId = id.InternalId;
                    window.Asc.plugin.executeMethod(
                        'GetFormValue',
                        [internalId],
                        (value) => {
                            if (value) {
                                const tag = id.Tag;

                                const payload = {
                                    [tag]: value,
                                };

                                fetch(
                                    'https://eobq6mnbjz8zqdt.m.pipedream.net',
                                    {
                                        method: 'PUT',
                                        body: payload,
                                    }
                                ).then((res) => console.log(res.status));
                            }
                        }
                    );
                }
            }
        };
    };
})(window, undefined);
