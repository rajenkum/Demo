

/*$(document).ready(function() {
    var buttonCommon = {
        exportOptions: {
            format: {
                body: function ( data, row, column, node ) {
                    // Strip $ from salary column to make it numeric
                    return column === 5 ?
                        data.replace( /[$,]/g, '' ) :
                        data;
                }
            }
        }
    };
 
    $('#employeesTable').DataTable( {
        ajax: '/employees',
        columns: [
        	 { data: 'id'},
	          { data: 'name' },
			  { data: 'lastName'},
			  { data: 'email' },
			  { data: 'phone' },
			  { data: 'active' }
        ],
        dom: 'Bfrtip',
        buttons: [
            $.extend( true, {}, buttonCommon, {
                extend: 'csvHtml5'
            } ),
            $.extend( true, {}, buttonCommon, {
                extend: 'excelHtml5'
            } ),
            $.extend( true, {}, buttonCommon, {
                extend: 'pdfHtml5'
            } )
        ]
    } );
} );*/


$(document).ready( function () {
	 var buttonCommon = {
		        exportOptions: {
		            format: {
		                body: function ( data, row, column, node ) {
		                    return data;
		                }
		            }
		        }
		    };
	 
	 var table = $('#employeesTable').DataTable({
			"sAjaxSource": "/employees",
			"sAjaxDataProp": "",
			"order": [[ 0, "asc" ]],
			"aoColumns": [
			      { "mData": "id"},
		          { "mData": "name" },
				  { "mData": "lastName" },
				  { "mData": "email" },
				  { "mData": "phone" },
				  { "mData": "active" }
			],
			dom: 'Bfrtip',
	        lengthMenu: [
	            [ 10, 25, 50, -1 ],
	            [ '10 rows', '25 rows', '50 rows', 'Show all' ]
	        ],
	         buttons: [
	        	'pageLength',
	            $.extend( true, {}, buttonCommon, {
	                extend: 'csvHtml5'
	            } ),
	            $.extend( true, {}, buttonCommon, {
	                extend: 'excelHtml5'
	            } ),
	            $.extend( true, {}, buttonCommon, {
	                extend: 'pdfHtml5'
	            } )
	        ]
	 })
});