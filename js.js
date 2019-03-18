const standardItems = [
	"input",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"span",
	"div",
	"textarea",
	"margin",
	"padding",
	"display",
	"background",
	"background-color",
	"background-size",
	"background-repeat",
	"position",
	"top",
	"left",
	"right",
	"bottom"
];
const Autocomplete = Vue.component("autocomplete", {
	template: "#autocomplete-tpl",
	props: ["items", "placeholder", "label", "textarea", "rows", "cols"],
	data() {
		return {
			id: 'input-' + parseInt(Math.random() * 1000),
			inputValue: "",
			searchMatch: [],
			selectedIndex: 0,
			clickedChooseItem: false,
			wordIndex: 0
		};
	},
	mounted() {
    const _self = this;
    document.querySelector('#' + this.id)
      .addEventListener('input', function() {
        const caret = getCaretCoordinates(this, this.selectionEnd);

        if (_self.searchMatch.length > 0) {
          const element = document.querySelectorAll('.' + _self.id + '-list');

          if (element[0]) {
            element[0].style.top = caret.top + 40 + 'px';
            element[0].style.left = caret.left + 'px';
          }
        }
      });
  },
	computed: {
		listToSearch() {
			if (typeof this.items !== "undefined" && this.items.length > 0) {
				return this.items;
			} else {
				return window.animals;
			}
		},
		currentWord() {
			return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')[this.wordIndex];
		},
		inputSplitted() {
			return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(" ");
		}
	},
	watch: {
		inputValue() {
			this.focus();
			console.log(this.inputSplitted)
			this.selectedIndex = 0;
			this.wordIndex = this.inputSplitted.length - 1;
		}
	},
	methods: {
		highlightWord(word) {
			const regex = new RegExp("(" + this.currentWord + ")", "g");
			return word.replace(regex, '<mark>$1</mark>');
		},
		setWord(word) {
			let currentWords = this.inputValue.replace(/(\r\n|\n|\r)/gm, '__br__ ').split(' ');
			currentWords[this.wordIndex] = currentWords[this.wordIndex].replace(this.currentWord, word + ' ');
			this.wordIndex += 1;
			this.inputValue = currentWords.join(' ').replace(/__br__\s/g, '\n');
		},
		moveDown() {
			if (this.selectedIndex < this.searchMatch.length - 1) {
				this.selectedIndex++;
			}
		},
		moveUp() {
			if (this.selectedIndex !== -1) {
				this.selectedIndex--;
			}
		},
		selectItem(index) {
			this.selectedIndex = index;
			this.chooseItem();
		},
		chooseItem(e) {
			this.clickedChooseItem = true;

			if (this.selectedIndex !== -1 && this.searchMatch.length > 0) {
				if (e) {
					e.preventDefault();
				}
				this.setWord(this.searchMatch[this.selectedIndex]);
				this.selectedIndex = -1;
			}
		},
		focusout(e) {
			setTimeout(() => {
				if (!this.clickedChooseItem) {
					this.searchMatch = [];
					this.selectedIndex = -1;
				}
				this.clickedChooseItem = false;
			}, 100);
		},
		focus() {
			this.searchMatch = [];
			if (this.currentWord !== "") {
				this.searchMatch = this.listToSearch.filter(
					el => el.indexOf(this.currentWord) >= 0
				);
			}
			if (
				this.searchMatch.length === 1 &&
				this.currentWord === this.searchMatch[0]
			) {
				this.searchMatch = [];
			}
		}
	}
});

new Vue({
	el: "#app"
});


