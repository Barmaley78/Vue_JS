// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// 3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

const app = new Vue({
    el: '#app',
    data: {
        message: 'Some button text',
        listElements: [],
        listElementNumber: 0
    },
    methods: {
        invertMessage() {
            this.message = this.message.split('').reverse().join('')
        },
        addListElement() {
            this.listElementNumber += 1;
                this.listElements.push({title: 'Новый элемент списка', count: this.listElementNumber})
        },
        delListElement(event) {
            event.currentTarget.remove();
        }
    }
})