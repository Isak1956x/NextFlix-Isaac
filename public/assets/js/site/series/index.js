$(document).ready(function()
{
    $('.delete-serie').on('click', function(e)
{
    e.preventDefault();
    const form = $(this).closest('form');
    if(confirm('Are you sure you want to delete this serie?'))
    {
  form.submit();
    }
});


    $('.delete-genre').on('click', function(e)
{
    e.preventDefault();
    const form = $(this).closest('form');
    if(confirm('Are you sure you want to delete this genre?'))
    {
  form.submit();
    }
});
});