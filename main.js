const body = document.querySelector("body");
// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", (e) => {
	// console.log(e.target, deleteBtn);
	deleteBtn.remove();
	// e.target.remove()
});

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/1/200/300  სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
const img = document.createElement("img");
img.src = "https://picsum.photos/id/1/200/300";
// img.setAttribute("src", "https://picsum.photos/id/1/200/300");
body.appendChild(img);

// 3. html-ში შექმენით <div id="characters-list"></div>

// 4.
//     4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
//     4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი მსგავსი (სტილები დაადეთ css ის საშუალებით).
//     4.3 ეს html სტრინგი ჩასვით ამ დივში: <div id="characters-list"></div>.
//     4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.
const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

const charactersList = document.querySelector(".characters-list");

function renderCards(arr) {
	const charCards = arr
		.map((char) => {
			return `
			<div class="character-card">
				<div class="char-info">
					<div class="char-desc">
						<h3 class="name">${char.first_name} ${char.last_name}</h3>
						<span class="house">House: ${char.house}</span>
						<span class="actor hidden">${char.actor}</span>
					</div>
					<div class="char-img">
						<img src="${char.image}" alt="${char.actor}" />
					</div>
				</div>
				<div class="btns">
					<button class="btn show-info">Info</button
					><button class="btn delete-card">Delete</button>
				</div>
			</div>
		`;
		})
		.join("");
	// console.log(charCards);
	charactersList.innerHTML = charCards;

	// ჰტმლ-ში დამატების შემდეგ შეგვიძლია ამ ტეგების დასელექთება და მათზე ივენთის დამატება

	const infoBtns = document.querySelectorAll(".show-info"),
		deleteBtns = document.querySelectorAll(".delete-card");

	// console.log(infoBtns, deleteBtns);

	infoBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			// ჯავასკრიპტში შეგვიძლია დავასელექთოთ მშობელი, შვილი, მეზობელი (sibling) ელემენტები
			let actor = btn.parentNode.parentNode.querySelector(".actor");
			actor.classList.toggle("hidden");
		});
	});

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			// console.log("delete", btn.parentNode.parentNode);
			btn.parentNode.parentNode.remove();
		});
	});
}

renderCards(characters);
// renderCardsForEach(characters);  ამ ფუნქციის გამოძახებაც იგივე შედეგს მოგვცემს
// render cards with forEach
function renderCardsForEach(arr) {
	arr.forEach((element) => {
		// თითოეული ელემენტისთვის შევქმნათ div,  დავამატოთ კლასი character-card და innerHTML
		let div = document.createElement("div");
		div.classList.add("character-card");
		div.innerHTML = `
				<div class="char-info">
					<div class="char-desc">
						<h3 class="name">${element.first_name} ${element.last_name}</h3>
						<span class="house">House: ${element.house}</span>
						<span class="actor hidden">${element.actor}</span>
					</div>
					<div class="char-img">
						<img src="${element.image}" alt="${element.actor}" />
					</div>
				</div>
				<div class="btns">
					<button class="btn show-info">Info</button
					><button class="btn delete-card">Delete</button>
				</div>
		`;

		// თითოეული შექმნილი div დავამატოთ charactersList-ში
		charactersList.append(div);
	});
	// console.log(charCards);

	const infoBtns = document.querySelectorAll(".show-info"),
		deleteBtns = document.querySelectorAll(".delete-card");

	// console.log(infoBtns, deleteBtns);

	infoBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			let actor = btn.parentNode.parentNode.querySelector(".actor");
			actor.classList.toggle("hidden");
		});
	});

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			// console.log("delete", btn.parentNode.parentNode);
			btn.parentNode.parentNode.remove();
		});
	});
}

// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)
// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების (append)-ის შემდეგ

// COMMENT
// async functions
// დანარჩენი კოდი არ ელოდება ასეთი ფუნქციის შესრულებას
function printOne() {
	console.log("1");
}

// თუ გვჭირდება timeout, interval-ის გაუქმება უნდა დავამატოთ მსგავსი ცვლადი,
// timeout, interval გვიბრუნებს უნიკალურ id-ის რომელიც შემდეგ შეგვიძლია ამ ცვლადში შევინახოთ და
// clearInterval-ს გადავცეთ

let timeoutId = null;

function startTimeoutFn() {
	console.log("start function");

	// setTimeout(printOne, 3000);
	// ეს კოდი შესრულდება 5000 მილიწამის შემდეგ, მხოლოდ ერთხელ
	//
	timeoutId = setTimeout(() => {
		console.log("timeout");
	}, 5000);

	console.log("end function");
}
// startTimeoutFn();

let intervalId = null;

function startIntervalFn() {
	// console.log("start function");
	// ეს კოდი შესრულდება ყოველ 1 წამში (1000 მილიწამში)
	intervalId = setInterval(() => {
		// წამებს გამოიტანს
		let d = new Date().getSeconds();
		console.log("interval", d);
	}, 1000);

	// console.log("end function");
}

// startIntervalFn();
// ინტერვალის შესაჩერებლად
function stopIntervalFn() {
	clearInterval(intervalId);
}

function stopTimeoutFn() {
	clearTimeout(timeoutId);
}

const startTimeout = document.querySelector(".start-timeout"),
	startInterval = document.querySelector(".start-interval"),
	stopTimeout = document.querySelector(".stop-timeout"),
	stopInterval = document.querySelector(".stop-interval");

// timeout, interval -ის ღილაკებზე დამატება
startTimeout.addEventListener("click", startTimeoutFn);
stopTimeout.addEventListener("click", stopTimeoutFn);
startInterval.addEventListener("click", startIntervalFn);
stopInterval.addEventListener("click", stopIntervalFn);

// COMMENT
// slider
// სლაიდერის ღილაკები
const nextBtn = document.querySelector("#next"),
	prevBtn = document.querySelector("#prev"),
	sliders = document.querySelectorAll(".slider-item"),
	startAutoSliding = document.querySelector("#start-auto"),
	stopAutoSliding = document.querySelector("#stop-auto");

// საწყისი activeIndex
let activeIndex = 0;

console.log("sliders", sliders);

function initSlider() {
	// next prev ღილაკებზე ლისენერის დამატება
	nextBtn.addEventListener("click", showNextSlide);
	prevBtn.addEventListener("click", showPrevSlide);

	// ერთ-ერთ სლაიდზე active კლასის დამატება activeIndex-ის მიხედვით
	renderSlides();

	// კლავიატურის ღილაკებზე მოსმენა
	document.addEventListener("keyup", (e) => {
		console.log(e);
		// e.code გვიბრუნდებს შესაბამისი ღილაკის შესახებ ინფორმაციას
		if (e.code === "ArrowLeft") {
			showNextSlide();
		}
	});
}

// activeIndex (0, 1, ან 2) ინდექსის მქონე სლაიდზე ამატებს active კლასს, დანარჩენებზე შლის
function renderSlides() {
	console.log("activeIndex", activeIndex);
	sliders.forEach((slide, i) => {
		if (i === activeIndex) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

//
function showNextSlide() {
	// console.log("next");
	// activeIndex ის მნიშვნელობის გაზრდა და ვამოწმებთ ეს ინდექსი (სლაიდების რაოდენობას - 1)-ზე მეტი ხომ არაა
	if (activeIndex === sliders.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}
	//  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
	renderSlides();
}

function showPrevSlide() {
	// console.log("prevBtn");
	// activeIndex ის მნიშვნელობის შემცირება და ვამოწმებთ ეს ინდექსი 0-ზე ნაკლები ხომ არაა
	if (activeIndex === 0) {
		activeIndex = sliders.length - 1;
	} else {
		activeIndex--;
	}
	//  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
	renderSlides();
}

// COMMENT autosliding
// id სლაიდერის ინტერვალისთვის
let autoSlidingId = null;

function startIntervalFnSlider() {
	// ეს კოდი შესრულდება ყოველ 3 წამში (3000 მილიწამში)
	autoSlidingId = setInterval(showNextSlide, 3000);
}

// autosliding -ის შეჩერება
function stopIntervalFnSlider() {
	clearInterval(autoSlidingId);
}

// autosliding-ის დამატება შესაბამის ღილაკებზე
startAutoSliding.addEventListener("click", startIntervalFnSlider);
stopAutoSliding.addEventListener("click", stopIntervalFnSlider);

// სლაიდერის დარენდერება საიტის ჩატვირთვისას
initSlider();
