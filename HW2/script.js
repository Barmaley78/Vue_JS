// Вы разрабатываете приложение для отображения и сортировки списка товаров.
// У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой.
// Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене
// (по возрастанию и по убыванию).

new Vue({
    el: '#app',
    data: {
        products: [
            {name: 'meet', price: 100},
            {name: 'chicken', price: 250},
            {name: 'cola', price: 320},
            {name: 'coffee', price: 150},
        ]
    },
    methods: {
        sortCol({target, currentTarget}) {
            if (!(currentTarget.dataset.checkAscending === "true")) {
                this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, true));
                currentTarget.dataset.checkAscending = "true";
            } else {
                this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, false));
                currentTarget.dataset.checkAscending = "false";
            }
            function sortFunction (a, b, sortKey, checkAscending) {
                const valueA = String(a[sortKey]).toLowerCase();
                const valueB = String(b[sortKey]).toLowerCase();

                if (checkAscending) {
                    return valueA.localeCompare(valueB);
                } else {
                    return valueB.localeCompare(valueA);
                }
            }
        }
    }
})