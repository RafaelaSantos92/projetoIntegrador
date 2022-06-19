'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">informacao-muda-o-mundo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5d43d59aeefc94b8d6a3219229c8af37a315471461d11e13ea1a26cda7de590ffa02ccc5f667076701026f7cb0147f0e196cc4e991c2587474ee6e2e333ae0b0"' : 'data-target="#xs-components-links-module-AppModule-5d43d59aeefc94b8d6a3219229c8af37a315471461d11e13ea1a26cda7de590ffa02ccc5f667076701026f7cb0147f0e196cc4e991c2587474ee6e2e333ae0b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5d43d59aeefc94b8d6a3219229c8af37a315471461d11e13ea1a26cda7de590ffa02ccc5f667076701026f7cb0147f0e196cc4e991c2587474ee6e2e333ae0b0"' :
                                            'id="xs-components-links-module-AppModule-5d43d59aeefc94b8d6a3219229c8af37a315471461d11e13ea1a26cda7de590ffa02ccc5f667076701026f7cb0147f0e196cc4e991c2587474ee6e2e333ae0b0"' }>
                                            <li class="link">
                                                <a href="components/AlertaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastroLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MinhasPublicacoesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinhasPublicacoesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiasDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiasDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiasEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiasEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RodapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SobreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemaDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemaDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemaEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemaEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerNoticiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerNoticiaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/noticias.html" data-type="entity-link" >noticias</a>
                            </li>
                            <li class="link">
                                <a href="classes/temas.html" data-type="entity-link" >temas</a>
                            </li>
                            <li class="link">
                                <a href="classes/user.html" data-type="entity-link" >user</a>
                            </li>
                            <li class="link">
                                <a href="classes/userLogin.html" data-type="entity-link" >userLogin</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link" >AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoticiasService.html" data-type="entity-link" >NoticiasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemaService.html" data-type="entity-link" >TemaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});