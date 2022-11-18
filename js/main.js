$(document).ready(function () {
    "use strict";

    var distance = $(".distance");
    var distanceText = $("#rangeTextOne");
    $("#rangeOne").slider({
        min: 50,
        max: 10000,
        value: 50,
        change: function( event, ui ) {
            distance.text(ui.value + ' KM');
            distanceText.text(ui.value);
            var left = ui.handle.style.left;
            $("#rangePrice").css("width", left);
            $("#rangeTextWrapOne").css("left", left);
        },
        slide: function( event, ui ) {
            distance.text(ui.value + ' KM');
            distanceText.text(ui.value);
            var left = ui.handle.style.left;
            $("#rangePrice").css("width", left);
            $("#rangeTextWrapOne").css("left", left);
        }
    });

    var date = $(".date");
    var dateText = $("#rangeTextTwo");
    $("#rangeTwo").slider({
        min: 5,
        max: 60,
        value: 5,
        change: function( event, ui ) {
            date.text(ui.value + ' dana');
            dateText.text(ui.value);
            var left = ui.handle.style.left;
            $("#rangeDay").css("width", left);
            $("#rangeTextWrapTwo").css("left", left);
        },
        slide: function( event, ui ) {
            date.text(ui.value + ' dana');
            dateText.text(ui.value);
            var left = ui.handle.style.left;
            $("#rangeDay").css("width", left);
            $("#rangeTextWrapTwo").css("left", left);
        }
    });

    var formDistance;
    var formDate;

    $(".main_block_step_one_result_btn").click(function() {
        var ineerDistance = $(".main_block_step_one_result_text .distance").text();
        var ineerDate = $(".main_block_step_one_result_text .date").text();
        formDistance = ineerDistance;
        formDate = ineerDate;
        $(".main_block_step_one").addClass("hide");
        $(".main_block_navigation").addClass("active");
        $(".main_block_step_two").addClass("active");
        $(".main_block_navigation_item_one").addClass("active");
    });

    var formName;
    var formFather;
    var formSurname;
    var formTelephone;
    var formEmail;
    var formBirth;

    $('.main_block_step_two_politic input').change(function() {
        if(this.checked) {
            $(".main_block_step_two_next").addClass("active");
        } else {
            $(".main_block_step_two_next").removeClass("active");
        }      
    });

    $(".main_block_step_two_next").click(function() {

        if (!$('#name').val()) {
          $("#name").addClass("error");
        } else {
          $("#name").removeClass("error");
        }

        if (!$('#father').val()) {
          $("#father").addClass("error");
        } else {
          $("#father").removeClass("error");
        }

        if (!$('#surname').val()) {
          $("#surname").addClass("error");
        } else {
          $("#surname").removeClass("error");
        }

        if (!$('#telephone').val()) {
          $("#telephone").addClass("error");
        } else {
          $("#telephone").removeClass("error");
        }

        if (!$('#email').val()) {
          $("#email").addClass("error");
        } else {
          $("#email").removeClass("error");
        }

        if (!$('#birth').val()) {
            $("#birth").addClass("error");
        } else {
            $("#birth").removeClass("error");
        }

        if(!$(".main_block_step_two_inputs input").hasClass("error")) {
            formName = $('#name').val();
            formFather = $('#father').val();
            formSurname = $('#surname').val();
            formTelephone = $('#telephone').val();
            formEmail = $('#email').val();
            formBirth = $('#birth').val();
            $(".main_block_navigation_item_two").addClass("active");
            $(".main_block_step_two").removeClass("active");
            $(".main_block_step_three").addClass("active");
        }

    });

    var formRegionYur;
    var formPlaceYur;
    var formMunicipalityYur;
    var formZipcodeYur;
    var formAddressYur;
    var formTelephoneYur;

    var formRegionFact;
    var formPlaceFact;
    var formMunicipalityFact;
    var formZipcodeFact;
    var formAddressFact;
    var formTelephoneFact;

    $(".main_block_step_three_btns_back").click(function() {
        $(".main_block_step_three").removeClass("active");
        $(".main_block_step_two").addClass("active");
    });

    $('.main_block_step_three_item_checkbox input').change(function() {

        var formRegionYurCheck = $("#regionYur").val();
        var formPlaceYurCheck = $("#placeYur").val();
        var formMunicipalityYurCheck = $("#municipalityYur").val();
        var formZipcodeYurCheck = $("#zipcodeYur").val();
        var formAddressYurCheck = $("#addressYur").val();
        var formTelephoneYurCheck = $("#telephoneYur").val();

        if(this.checked) {
            $("#regionFact").val(formRegionYurCheck);
            $("#placeFact").val(formPlaceYurCheck);
            $("#municipalityFact").val(formMunicipalityYurCheck);
            $("#zipcodeFact").val(formZipcodeYurCheck);
            $("#addressFact").val(formAddressYurCheck);
            $("#telephoneFact").val(formTelephoneYurCheck);
        } else {
            $("#regionFact").val('');
            $("#placeFact").val('');
            $("#municipalityFact").val('');
            $("#zipcodeFact").val('');
            $("#addressFact").val('');
            $("#telephoneFact").val('');
        }
        
    });

    $(".main_block_step_three_btns_next").click(function() {

        if (!$('#regionYur').val()) {
          $("#regionYur").addClass("error");
        } else {
          $("#regionYur").removeClass("error");
        }

        if (!$('#placeYur').val()) {
          $("#placeYur").addClass("error");
        } else {
          $("#placeYur").removeClass("error");
        }

        if (!$('#municipalityYur').val()) {
          $("#municipalityYur").addClass("error");
        } else {
          $("#municipalityYur").removeClass("error");
        }

        if (!$('#zipcodeYur').val()) {
          $("#zipcodeYur").addClass("error");
        } else {
          $("#zipcodeYur").removeClass("error");
        }

        if (!$('#addressYur').val()) {
          $("#addressYur").addClass("error");
        } else {
          $("#addressYur").removeClass("error");
        }

        if (!$('#telephoneYur').val()) {
            $("#telephoneYur").addClass("error");
        } else {
            $("#telephoneYur").removeClass("error");
        }

        // next

        if (!$('#regionFact').val()) {
            $("#regionFact").addClass("error");
        } else {
            $("#regionFact").removeClass("error");
        }

        if (!$('#placeFact').val()) {
        $("#placeFact").addClass("error");
        } else {
        $("#placeFact").removeClass("error");
        }

        if (!$('#municipalityFact').val()) {
        $("#municipalityFact").addClass("error");
        } else {
        $("#municipalityFact").removeClass("error");
        }

        if (!$('#zipcodeFact').val()) {
        $("#zipcodeFact").addClass("error");
        } else {
        $("#zipcodeFact").removeClass("error");
        }

        if (!$('#addressFact').val()) {
        $("#addressFact").addClass("error");
        } else {
        $("#addressFact").removeClass("error");
        }

        if (!$('#telephoneFact').val()) {
            $("#telephoneFact").addClass("error");
        } else {
            $("#telephoneFact").removeClass("error");
        }

        if(!$(".main_block_step_three_item_inputs input").hasClass("error")) {
            formRegionYur = $('#regionYur').val();
            formPlaceYur = $('#placeYur').val();
            formMunicipalityYur = $('#municipalityYur').val();
            formZipcodeYur = $('#zipcodeYur').val();
            formAddressYur = $('#addressYur').val();
            formTelephoneYur = $('#telephoneYur').val();

            formRegionFact = $('#regionFact').val();
            formPlaceFact = $('#placeFact').val();
            formMunicipalityFact = $('#municipalityFact').val();
            formZipcodeFact = $('#zipcodeFact').val();
            formAddressFact = $('#addressFact').val();
            formTelephoneFact = $('#telephoneFact').val();

            $(".main_block_navigation_item_three").addClass("active");
            $(".main_block_step_three").removeClass("active");
            $(".main_block_step_four").addClass("active");
        }

    });

    var whoOccupies;
    var education;
    var document;

    var selfEmployment;
    var selfTotal;
    var selfWorkingPlace;
    var selfCompanyName;
    var selfCompanyAddress;
    var selfTelephoneCompany;
    var selfSalaryAmount;
    var selfDatePayment;
    var selfbank;

    $('.interest').change(function() {
        $('.interest').prop('checked', false);
        $(this).prop('checked', true);

        var id = $(this)[0].id;

        if(id == "busy") {
            $(".main_block_step_four_item_inputs").removeClass("hide");
        } else {
            $(".main_block_step_four_item_inputs").addClass("hide");
        }

    });

    $('.education').change(function() {
        $('.education').prop('checked', false);
        $(this).prop('checked', true);
    });

    $('.document').change(function() {
        $('.document').prop('checked', false);
        $(this).prop('checked', true);
    });

    $(".main_block_step_four_btns_next").click(function() {

        if($('#busy').is(":checked")) {
            
            if (!$('#employment').val()) {
                $("#employment").addClass("error");
            } else {
                $("#employment").removeClass("error");
            }
    
            if (!$('#total').val()) {
                $("#total").addClass("error");
            } else {
                $("#total").removeClass("error");
            }
    
            if (!$('#workingPlace').val()) {
                $("#workingPlace").addClass("error");
            } else {
                $("#workingPlace").removeClass("error");
            }
    
            if (!$('#companyName').val()) {
                $("#companyName").addClass("error");
            } else {
                $("#companyName").removeClass("error");
            }
    
            if (!$('#companyAddress').val()) {
                $("#companyAddress").addClass("error");
            } else {
                $("#companyAddress").removeClass("error");
            }
    
            if (!$('#telephoneCompany').val()) {
                $("#telephoneCompany").addClass("error");
            } else {
                $("#telephoneCompany").removeClass("error");
            }

            if (!$('#salaryAmount').val()) {
                $("#salaryAmount").addClass("error");
            } else {
                $("#salaryAmount").removeClass("error");
            }

            if (!$('#datePayment').val()) {
                $("#datePayment").addClass("error");
            } else {
                $("#datePayment").removeClass("error");
            }

            if (!$('#bank').val()) {
                $("#bank").addClass("error");
            } else {
                $("#bank").removeClass("error");
            }

        }

        if(!$(".main_block_step_four_item_inputs input").hasClass("error")) {
            selfEmployment = $('#employment').val();
            selfTotal = $('#total').val();
            selfWorkingPlace = $('#workingPlace').val();
            selfCompanyName = $('#companyName').val();
            selfCompanyAddress = $('#companyAddress').val();
            selfTelephoneCompany = $('#telephoneCompany').val();
            selfSalaryAmount = $('#salaryAmount').val();
            selfDatePayment = $('#datePayment').val();
            selfbank = $('#bank').val();
        }

        var strWhoOccupies = $(".interest:checked").parent().text();
        whoOccupies = $.trim(strWhoOccupies);

        var streducation = $(".education:checked").parent().text();
        education = $.trim(streducation);

        var strdocument = $(".document:checked").parent().text();
        document = $.trim(strdocument);
        
    });
 
    $(".main_block_step_four_btns_back").click(function() {
        $(".main_block_step_four").removeClass('active');
        $(".main_block_step_three").addClass('active');
    });

});