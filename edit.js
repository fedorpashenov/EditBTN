$("a.editbtn").on("click", function (e)
    {
        e.preventDefault();

        // var iblock = $("select#site option:selected").val();
        // $('#catalogedit').load(ajaxPath+'/ajax.php',{id:sectionId, obj:'catalog'});
        var id = $.map($("input.edit:checkbox:checked"), function (el)
        {
            return $(el).attr("data-id");
        });
        var code = {};

        $("#col option:selected").each(function ()
        {
            if (this.value != 0) code[this.value] = this.text;
        });

        if (siteIblock == 0)
        {
            alert("Вы не выбрали сайт!");
            setTimeout("$.fancybox.close()", 1);
        } else if (id == "")
        {
            alert("Вы не выбрали товар!");
            setTimeout("$.fancybox.close()", 1);
        } else
        {
            $("#in_form_edit").load(
                ajaxPath + "/editForm.php",
                { iblock: siteIblock, id: id, code: code },
                function ()
                {
                    allFeilds = "";
                    //222выбираем только те свойства которые были затронуты для дальнейшей отправки ajax
                    $("form#f_edit")
                        .find("input,select,textarea")
                        .not('[type="submit"],[type="checkbox"]')
                        .each(function ()
                        {
                            allFeilds[$(this).attr("name")] = 1;
                        });
                    $("form#f_edit")
                        .find("input,select,textarea")
                        .not('[type="submit"]')
                        .click(function ()
                        {
                            delete allFeilds[$(this).attr("name")];
                        });
                }
            );
        }
    });
