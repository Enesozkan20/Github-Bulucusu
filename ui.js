import { elements, parseDate } from "./helpers.js";


const renderProfile = (user) => {


    elements.main.innerHTML = `
     <section class="left">
            <img src="${user.avatar_url}" alt="">
            <a href="${user.html_url}" target='_blank'>Profili Göster</a>
        </section>           
        <section class="right">
            <div>
                <span>Acik Repolar: ${user.public_repos}</span>
                <span>Acik Gösteriler: ${user.public_gists}</span>
                <span>Takipciler: ${user.followers}</span>
                <span>Takip Edilenler: ${user.following}</span>
            </div>
            <ul>
                <li>Hakkinda::${user.bio}</li>
                <li>Sirket:${user.company}</li>
                <li>Website:${user.blog}</li>
                <li>Konum:${user.location}</li>
                <li>Hesap Olusturma:${parseDate(user.created_at)}</li>
            </ul>
        </section>`
};

export default renderProfile;

