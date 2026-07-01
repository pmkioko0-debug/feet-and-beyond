function showCategory(category){

    const categories = document.querySelectorAll('.product-grid');
    const buttons = document.querySelectorAll('.tab-btn');

    categories.forEach(item=>{
        item.classList.remove('active-category');
    });

    buttons.forEach(btn=>{
        btn.classList.remove('active');
    });

    document.getElementById(category).classList.add('active-category');

    event.target.classList.add('active');
}