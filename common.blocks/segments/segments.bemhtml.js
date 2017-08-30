// block('segments').replace()(function() {
//     return {
//         tag: 'script',
//         content: 'var segments = ' + JSON.stringify(this.ctx.segments.map(segment => {
//             segment.altTrans = applyCtx(segment.altTrans);

//             return segment;
//         }))
//     };
// });

block('segments').content()(function() {
    // const r = JSON.stringify(this.ctx.segments.map(segment => {
    //     segment.altTrans = applyCtx(segment.altTrans);

    //     return segment;
    // }));
    // console.log('segment.al', r);
    return {
        tag: 'script',
        attrs: {
            'data-value': JSON.stringify(this.ctx.segments.map(segment => {
                segment.altTrans = applyCtx(segment.altTrans);
                return segment
            }))
        },
        // content: 'var segments = ' + JSON.stringify(this.ctx.segments.map(segment => {
        //                 segment.altTrans = applyCtx(segment.altTrans);

        //                 return segment;
        //             }))
        content: `
            var scripts = document.scripts;
            var value = scripts[scripts.length-1].dataset.value;
            window.segments = JSON.parse(value);
        `
    };
});
