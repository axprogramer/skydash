function formValidate() { $("form").each(function () { $(this).validate({ errorPlacement: function (e, t) { var n = t.parents(".selectize-input"), i = t.parents(".radio-group-required"); n.length > 0 ? (n.addClass("error"), e.insertAfter(t.parents(".selectize-control"))) : i.length > 0 ? e.insertAfter(i) : e.insertAfter(t); } }); }); }
exports.formValidate = formValidate;
