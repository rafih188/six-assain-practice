let loadData =async ()=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await response.json();
    const posts = data.posts;
    displayPost(posts);

  
}; 

const displayPost = (posts)=>{
//find a container
const postContainer = findDom('post-container')    

posts.forEach(post => {
//create a div 
const postCard = document.createElement('div');
postCard.classList= `my-8`;
//set inner html
postCard.innerHTML =`
<div class="hero border-2 border-[#797DFC] rounded-3xl bg-base-200">
<div class="hero-content flex-col lg:flex-row">
  <div class="indicator">
    <span class="indicator-item badge badge-secondary"></span>
    <div class="grid w-32 h-32 rounded-lg bg-base-300 place-items-center"><img src="${post.image}"
        alt=""></div>
  </div>
  <div>
    <p class="text-[14px] font-medium interfont text-[#12132DCC]"><span># ${post.category}</span> <span
        class="ml-4">Author: <span>${post.author.name}</span> </span></p>
    <h2 class="py-4 font-bold text-[#12132D] text-xl mulish-font">${post.title}</h2>
    <p
      class="pb-4 text-[#12132D99] interfont text-[16px] font-normal border-b-2 border-slate-950 border-dashed">
      ${post.description} </p>
    <div class="flex justify-between mt-3">
      <!-- icon == -->
      <div class="flex gap-3 text-[#12132D99] interfont text-[16px] font-normal">
        <i class="ri-message-2-line"><span>${post.comment_count}</span></i>
        <i class="ri-eye-line"><span>${post.view_count}</span></i>
        <i class="ri-time-line"><span>5</span>Min</i>
      </div>

      <!-- email== -->
      <span> <img onclick="emailClickHandle('${post.title}','${post.view_count}')" src="image/email.svg" alt=""> </span>
    </div>
  </div>
</div>
</div>

`;
//apend child
postContainer.appendChild(postCard);

});
};

loadData();


let latestData = async()=>{
const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
 const data = await response.json();
displayLatestPost(data);
 
};

let displayLatestPost= (posts)=>{

   // find a container ==
   let latestContainer = findDom('latest-container');

posts.forEach(post => {
//  create a div 
let lattestDiv = document.createElement('div');
lattestDiv.classList = `card bg-base-100 shadow-xl`;
// set inner html ==
lattestDiv.innerHTML= `
<figure class="px-10 pt-10">
    <img src="${post.cover_image}" alt="image" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">

    <h2 class="card-title text-start">${post.title}</h2>
    <p class="text-start ">${post.description} </p>
    <div class=" my-4 flex gap-2">
      <img class="border-2 h-11 w-11 rounded-[100%]" src="${post.profile_image}" alt="">
      <p>${post.author.name} <br> ${post.author.designation}</p>
    </div>
  </div>
`;
// appendChild==
latestContainer.appendChild(lattestDiv);

 
});
};

// handle search button function 
const handleSearch = ()=>{
  const searchField= findDom('search-field');
  const searchText = searchField.value;
};


let emailClickHandle=(title, view)=>{
  // tltle= '';
  // view='';
  // find a container 
  const markReadContainer = findDom('mark-read-container');


  // create a div 
  const showMarkReadContainer = document.createElement('div');
  showMarkReadContainer.classList=`flex mulish-font bg-[#fff] justify-between gap-5 p-4`;
  // set inner html 
  showMarkReadContainer.innerHTML=`
  <h2 class="text-[#12132D] font-semibold text-xl"> ${title} </h2>
  <i class="ri-eye-line">${view}</i>
  `;
  // appendChild 
  markReadContainer.appendChild(showMarkReadContainer);


}

latestData();
