class OneBlocOf3Cases  {
    constructor(
    lien_image_1, url_partenaire_1, alt_1, description_site_1, description_projet_1,
    lien_image_2, url_partenaire_2, alt_2, description_site_2, description_projet_2,
    lien_image_3, url_partenaire_3, alt_3, description_site_3, description_projet_3, 
    numberOfTheBloc,
    ) {
        this.lien_image_1 = lien_image_1;
        this.url_partenaire_1 = url_partenaire_1; 
        this.alt_1 = alt_1; 
        this.description_site_1 = description_site_1; 
        this.description_projet_1 = description_projet_1; 

        this.lien_image_2 = lien_image_2; 
        this.url_partenaire_2 = url_partenaire_2; 
        this.alt_2 = alt_2; 
        this.description_site_2 = description_site_2; 
        this.description_projet_2 = description_projet_2; 

        this.lien_image_3 = lien_image_3; 
        this.url_partenaire_3 = url_partenaire_3; 
        this.alt_3 = alt_3;
        this.description_site_3 = description_site_3; 
        this.description_projet_3 = description_projet_3;

        this.numberOfTheBloc = numberOfTheBloc;
    }

    addOneBlocToDOM() {
        return (
            `<div class="oneBloc" id="number_${this.numberOfTheBloc}">
                <div class="firstCase">
                    <a href=${this.url_partenaire_1} target="_blank" rel="noopener noreferrer nofollow">
                        <p>
                            <img src=${this.lien_image_1} alt=${this.alt_1} onmouseenter="dynamicEnter1(${this.numberOfTheBloc})" onmouseleave="dynamicExit(${this.numberOfTheBloc})"/>
                            <span class="dynamic_background"></span>
                            <span class="description_image description_site_image_2">${this.description_site_1}</span>
                            <span class="description_image description_site_image_3">${this.description_projet_1}</span>
                        </p>
                    </a>
                </div>
                <div class="secondCase">
                    <a href=${this.url_partenaire_2} target="_blank" rel="noopener noreferrer nofollow">
                        <p>
                            <img src=${this.lien_image_2} alt=${this.alt_2} onmouseenter="dynamicEnter2(${this.numberOfTheBloc})" onmouseleave="dynamicExit(${this.numberOfTheBloc})"/>
                            <span class="dynamic_background"></span>
                            <span class="description_image description_site_image_1">${this.description_site_2}</span>
                            <span class="description_image description_projet_image_3">${this.description_projet_2}</span>
                        </p>
                    </a>
                </div>
                <div class="thirdCase">
                    <a href=${this.url_partenaire_3} target="_blank" rel="noopener noreferrer nofollow">
                        <p>
                            <img src=${this.lien_image_3} alt=${this.alt_3} onmouseenter="dynamicEnter3(${this.numberOfTheBloc})" onmouseleave="dynamicExit(${this.numberOfTheBloc})"/>
                            <span class="dynamic_background"></span>
                            <span class="description_image description_projet_image_1">${this.description_site_3}</span>
                            <span class="description_image description_projet_image_2">${this.description_projet_3}</span>
                        </p>
                    </a>
                </div>
            </div>`
        )
    }
}