// getRestAjax
const getRestAjax = () => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        console.log(json);
        paginationData(json);
    })    
}

// 데이터 그리기
function simpleTemplating(data) {
    var html = '<ul class="ulclass">';
    $.each(data, function(index, item){
        html += `<li class="pgclass">
            ${item.employee_age} ${item.employee_name} 
            ${item.employee_salary} ${item.profile_image}
        </li>`;
    });
    html += '</ul>';
    return html;
}

function paginationData(data){
    $('#pagination-container').pagination({
        dataSource: data,
        pageSize: 10,
        pageNumber: 1,
        callback: function(data, pagination) {
            // template method of yourself
            var html = simpleTemplating(data);
            $('#data-container').html(html);
        }
    })
}


// className: 'paginationjs-theme-blue paginationjs-big'

$(document).ready(function() {
    getRestAjax();
});

