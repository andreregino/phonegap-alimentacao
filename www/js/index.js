/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {



// Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var data = [{
            "name": "Michele Lanches - Michele da Silva Se - Me"},{
            "name": "Posto Park - Chiesa Parque Industrial Combust"},{
            "name": "Paulo Cesar F Juliano Me - Paulo Cesar F Juliano Me"},{
            "name": "Unic Grill - Borges Lacerda & Lacerda Ltda -"},{
            "name": "Butreco Butiquin - Iorrana Reck da Costa Me"},{
            "name": "Restaurante Tia Jo - Restaurante Tia Jo Ltda - Me"},{
            "name": "Frangao A Na Brasa - Dal Bello e Dal Bello Ltda Me"},{
            "name": "Mangiare Pizzaria - Claudio Hiroshi Hashimoto - Me"},{
            "name": "Massa Fina Paes e Doces - Massa Fina Paes e Doces Ltda - M"},{
            "name": "Casa de Carne Machado - Fabiano Costa Machado"},{
            "name": "Joyce Porcino - Joyce Dos Santos Porcino Me"},{
            "name": "Miros Refeicoes - Miros Lanches Ltda Me"},{
            "name": "Casa de Paes Flavio - Flavio Proenca de Souza-Me"},{
            "name": "Paprika Restaurante - Samara Yasmin Schoch - Me"},{
            "name": "William Lopes da Silva - Restaur - William Lopes da Silva - Restaur"},{
            "name": "C R da Costa Rotisseria Me - C R da Costa Rotisseria Me"},{
            "name": "Posto Eldorado-Shell - Posto Atarumin Sjrp Ltda"},{
            "name": "Josafa Samir da Silva Me - Josafa Samir da Silva Me"},{
            "name": "Cupim Na Telha - Cupim Na Telha Restaurante Ltda"},{
            "name": "E M S Pizzaria e Alim - E M S Pizzaria e Alim Ltda Me"},{
            "name": "Toque Mineiro - Jx Refeioes Ltda Me"},{
            "name": "Godoi Oliveira Melo Comercio De - Godoi Oliveira Melo Com de Sucos"},{
            "name": "Rest Panela de Pedra - Restaurante Panela de Pedra Ltda"},{
            "name": "Acai da Praia - Marques & Schimidinger Lanchonet"},{
            "name": "Nicodemos Fernandes Ac - Nicodemos Fernandes Acougue Me"},{
            "name": "Casa de Carnes da Mamae - Wilson de Freitas Teixeira"},{
            "name": "Chibiu Botequim - Zanforlim & Albano Ltda - Me"},{
            "name": "Antonia Ramelli Duarte Me - Antonia Ramelli Duarte Me"},{
            "name": "Rei Pao Queijo Padaria - Rei do Pao de Queijo Padaria e C"},{
            "name": "Am Pm - M. C. Loja de Conveniencia Ltda"},{
            "name": "Djoy Temaki & Food - Maria Eugenia Ianni Zapaterra"},{
            "name": "Junqueira & Florencio - Junqueira & Florencio Ltda - M"},{
            "name": "Igor Mateus Neves Sanches Me - Igor Mateus Neves Sanches Me"},{
            "name": "O Rei do Pao de Queijo - Padaria e Confeitaria Hitara Ltd"},{
            "name": "O Rei do Pao de Queijo - Hitara Padaria e Confeitaria Ltd"},{
            "name": "Club do Cupim - Irmaos Rossi Restaurante Ltda -"},{
            "name": "Tempero Manero - Decio Simonetti Junior"},{
            "name": "Antenor Rodrigues Bar - Antenor Rodrigues - Bar - Me"},{
            "name": "Skina Lanches - Freitas & Boni Lanchonete Ltda M"},{
            "name": "Restaurante Ele & Ela - Rita de Cassia Pinheiro da Silva"},{
            "name": "Brasileirinho - Brasileirinho Restaurante Deli"},{
            "name": "Luis Henrique Gareti Me - Luis Henrique Gareti Me"},{
            "name": "Dommus Express - Premier Rio Preto Ltda - Me"},{
            "name": "Central Grill - Cossari & Coelho Ltda - Me"},{
            "name": "Aeroposto Conveniencia - Aeroposto Loja de Conv Ltda"},{
            "name": "Molecaggio Pizzas - Ana Maria Ribeiro Silva Sjrp Me"},{
            "name": "Posto Escala Boa Vista - Auto Posto Escala Boa Vista Ltda"},{
            "name": "Br Fitness Delivery - Br Silva Silva Fitness Restaur"},{
            "name": "Marcos Flavio Dos Santos Nascime - Marcos Flavio Dos Santos Nascime"},{
            "name": "Rm Funari Filho Restau - Rm Funari Filho Restaurante Me"},{
            "name": "Seiko Relojoaria - R Fukushima e Cia Ltda Me"},{
            "name": "Casa de Carnes Sobrima - Karina Goncalves de Souza Vicent"},{
            "name": "Bella Capri - Covizi e Carvalho Pizzaria e Res"},{
            "name": "Panificadora Santa Maria - Juliana Vicente Coutinho Me"},{
            "name": "So Suco - Tan Liyan Me"},{
            "name": "Restaurante Sabor do Sul - Restaurante Sabor do Sul Rio P."},{
            "name": "Nayara Lemos Lee - Nayara Lemos Lee Me"},{
            "name": "Subway - Htmg Riopreto Panificadora e Res"},{
            "name": "Fergue Hamburgueria - Fergue Hamburgueria Ltda Me"},{
            "name": "Sodie Doces - Sensacoes Silva & Souza Rio Pret"},{
            "name": "Chiquinho Catedral - W K Coml Rio Preto Eireli Me"},{
            "name": "Sensacoes Doces - Silva & Siqueira Martins Doces L"},{
            "name": "Cafe No Ponto - Poiate & Villar Ltda - Me"},{
            "name": "La Place - La Place Delicatessen Ltda Me"},{
            "name": "Subway - Pelaes Praca Comercio de Aliment"},{
            "name": "Tivoli Restaurantes - Bergamaschi e Furquim Ltda Me"},{
            "name": "Russo & Galante - Russo & Galante Sucos Ltda - Me"},{
            "name": "Lanchonete Li Ka Yon - Restaurante e Lanchonete Li Ka Y"},{
            "name": "Sabores da Carne - Sabores da Carne Rio Preto Ltd"},{
            "name": "Mauro Jorge Mendes Martins 79574 - Mauro Jorge Mendes Martins 79574"},{
            "name": "King Shake - Shake Foods Eireli Epp"},{
            "name": "Mc Donald S Lj Ber - Adrea S Food Com de Alim Ltda"},{
            "name": "Via Centro - Via Centro Auto Posto Ltda"},{
            "name": "Marcio Silva Mendes 08261698807 - Marcio Silva Mendes 08261698807"},{
            "name": "Torra Restaurante - Cafeteria Torra Torra Ltda"},{
            "name": "Via Frangu S - Via Frangus Com Carnes Ltda"},{
            "name": "Primo S Restaurante - Restaurante Sabor Br Ltda Me"},{
            "name": "Kiberama - Restaurante Arabe Ltda"},{
            "name": "Kiberama - Kiberama Restaurante Arabe Ltda"},{
            "name": "Monte Carlo Rio Preto Sp Conveni - Monte Carlo Rio Preto Sp Conveni"},{
            "name": "Casa de Paes - Casa de Paes Galeti Limitada - M"},{
            "name": "General Frangos - Ana Maria Leva Sj R Preto Me"},{
            "name": "L.Mangini Centro de Convencoes - L Mangini Centro de Convencoes L"},{
            "name": "Nosso Bar e Lanchonete - Ferian e Ferian Bar e Lanch Ltda"},{
            "name": "Rede Leve Pizza - Barbiero & Camargo Comercio de A"},{
            "name": "M. Y. Hirata - Confeitaria - M. Y. Hirata - Confeitaria - M"},{
            "name": "Delmina Carminatti Barbero - Me - Delmina Carminatti Barbero - Me"},{
            "name": "Izaias Benacci Alim Me - Izaias Benacci Alim Me"},{
            "name": "Casa de Carnes Caetano - Ana Maria Brida da Silva Me"},{
            "name": "Bom Demais Restaurante - Bom Demais Rio Preto Restaurante"},{
            "name": "Cafeteria Delicia de Minas - Alves e Trigo Com de Frios Lt Me"},{
            "name": "Churrascaria Gaucha - Antonio F Conte & Cia Ltda"},{
            "name": "Zappas - Pratic Loja de Conveniencia Ltda"},{
            "name": "Delicias Por Kilo - Core Rio Preto Restaurante Lt Me"},{
            "name": "Bar Vila Dionisio - Bar Vila Dionisio Ltda"},{
            "name": "Toquio Restaurante - Luciano Aky Restaurante Me"},{
            "name": "Paulo Reis Garcia 1565 - Paulo Reis Garcia 15657205120"},{
            "name": "A Confeitaria - Daniela Mortatti M Rio Preto Me"},{
            "name": "Supremo Restaurante - Brigo e Cia Ltda Me"},{
            "name": "David Henrique - David Henrique Freitas 375347328"},{
            "name": "Pedaco Pizzaria - Roberto Goncalves Damasceno Me"},{
            "name": "Doceria Schimidt - Eunice Xavier Carmeloci Me"},{
            "name": "Ice Fest - R e M C Prod Alim Art P Fest Lt"},{
            "name": "Oziride Niobe Giacchetto Dos San - Oziride Niobe Giacchetto Dos San"},{
            "name": "Lanchonete e Restaurante Formula - Brigida da G. de Oliveira - Me"},{
            "name": "Delicia Caseira - Ims Restaurante e Lanchonete Ltd"},{
            "name": "Posto Petroleun Shoppi - Posto Petroleum Shopping Ltda"},{
            "name": "Alceu Thome - Alceu Thome - Me"},{
            "name": "Pouso e Decolagem - Amaury Alves Rugno Me"},{
            "name": "Mc Donalds Rpj - Andreas Food Comercio de Aliment"},{
            "name": "Brenda Vital Pescador Me - Brenda Vital Pescador Me"},{
            "name": "Pizzaria San Remo - Pizzaria San Remo Ltda"},{
            "name": "Emporio Luna - Vlpi Pizzaria e Rest Ltda"},{
            "name": "Kilo Pratico - G A Iglesias Sao Jose do Rio Pre"},{
            "name": "Restaurante Ying Choi - Restaurante Ying Choi Ltda Me"},{
            "name": "Fenix Conveniencias - Fenix Rio Preto Loja de Convenie"},{
            "name": "Auto Posto Canaa Rio Preto Lt - Auto Posto Canaa Rio Preto Ltda"},{
            "name": "Canaa Conveniencias - Canaa Rio Preto Loja de Convenie"},{
            "name": "Posto Florido - Auto Posto Florido Rio Preto Lt"},{
            "name": "Panificadora Fabia - Fabia Andreia Salvador Silva Me"},{
            "name": "Monobloco - Izaias Pereira Padaria Me"},{
            "name": "Sander Kazuo Saito - Sander Kazuo Saito - Me"},{
            "name": "Auto Posto Porcino - Auto Posto Mercadao Rio Preto Lt"},{
            "name": "Dulce Restaurante e Doceria - Villanova & Villanova Ltda Me"},{
            "name": "Docura Doceria - Luciano & Gianjoppe Ltda"},{
            "name": "N.S Nossa S Ararecida - Refeicoes Nossa Sra A. R. P. L."},{
            "name": "Cupim de Sol 4 - Bmr Restaurante Ltda - Me"},{
            "name": "Vinan S Restaurante - Maria C Ferreira Bortolozo Me"},{
            "name": "Rest Tempero Maneiro - Pedro A. Pesce Masson - Me"},{
            "name": "Padaria Belinha - Panificadora Belinha Rp Ltda"},{
            "name": "Mega Sushi Restaurante - Mega Sushi Restaurante Ltda Me"},{
            "name": "Djalma Batista Ferreira Me - Djalma Batista Ferreira Me"},{
            "name": "Posto Metropole - Auto Posto Metropole Rio Preto L"},{
            "name": "Auto Posto Cacique-Shell - Auto Posto Cacique Rio Preto Ltd"},{
            "name": "Rotisserie da Sogra - Fernanda Rosa de Almeida Me"},{
            "name": "Bk Brasil - Bk Brasil Operacao e Assessoria"},{
            "name": "Kopenhagen - Assad e Assad Chocolates Finos"},{
            "name": "Disk Grill - Wilson Donizete Martins Dos Sant"},{
            "name": "Dantas e Nagaroto Boiat - Dantas e Nogaroto Boite Padari"},{
            "name": "Rest Salada e Companhia - Restaurante M e M Rio Preto Ltda"},{
            "name": "Acf Fast Food - Acf Fast Food Ltda. Me"},{
            "name": "Hitara Padaria e Confe - Hitara Padaria e Confeitaria Ltd"},{
            "name": "Samambaia Restaurante - Samambaia Restaurante Rio Preto"},{
            "name": "Sapore D Casa - Caroline Camarero - Me"},{
            "name": "Villa Gourmet - F H Gourmet Ltda - Me"},{
            "name": "Via Sab Restaurante - Via Sabores Rest Rio Preto"},{
            "name": "+Kid+Restaurante - Maiskidmais Restaurante Ltda Me"},{
            "name": "Kurokawa - Kurokawa Restaurante Ltda - Me"},{
            "name": "Villa do Suco - Villa do Suco Ltda"},{
            "name": "Nsp Corcio de Alintos - Nsp Comercio de Alimentos Eireli"},{
            "name": "Habibs - Rio Preto Point Comestiveis Ltda"},{
            "name": "Bella Capri - Rio Preto Vetorazzo Pizzaria e R"},{
            "name": "Restaurante Aeroporto - Luiz Carlos Rosa-Rio Preto - Me"},{
            "name": "Churrascaria e Restaurante Caeta - C. Caetano da Silva - Restaurant"},{
            "name": "Hanbai Sushi Bar - Hanbai Restaurante Japones Ltda"},{
            "name": "Hanbay - Hanbai Restaurante Japones Ltda"},{
            "name": "Euripedes Jose de Oliveira 14721 - Euripedes Jose de Oliveira 14721"},{
            "name": "Bella Capri - Rio Preto Norte Pizzaria e Resta"},{
            "name": "Acai da Praia - Marques & Schimidinger Lanchonet"},{
            "name": "Brigadella - Marcia Ribeiro Baiao Oliveira -"},{
            "name": "Gelio & Amarante Restaurante - Gelio Amarante Rest Ltda Me"},{
            "name": "Restaurante Araujo - M. E. C. de Araujo - Me"},{
            "name": "Fradeco - Fdc - Administracao de Refeicoes"},{
            "name": "Mister Self Restaurante - Mister Self Restaurante Ltda. -"},{
            "name": "Komatsu Restaurante - Sirlei Cristiane Lindolpho Komat"},{
            "name": "Bady Auto Posto-Shell - Petro Bady Com de Comb Ltda"},{
            "name": "Sabor do Brasil - Elizangela Cristina Souza da Sil"},{
            "name": "Art Pao Panificadora - Art Pao Rio Preto Panificadora L"},{
            "name": "Taberna Gourmet - Restaurante do Val Ltda Me"},{
            "name": "Panif Pao de Prata - Panif Pao de Pedra R Preto Lt Me"},{
            "name": "Blanckcafe - Lv Blanck Cafe e Restaurante Ltd"},{
            "name": "Sorveteria Elite - L. L. Sorveteria Limitada - Me"},{
            "name": "China In Box - Gonfaro Comercio de Alimentos Lt"},{
            "name": "Emporio Natural - Favarin - Comercio de Alimentos"},{
            "name": "Pe de Acai - Claudia Lara Foss Me"},{
            "name": "Casa do Norte Ceara - Rute Ferreira da Silva Lima-Me"},{
            "name": "Dionisio Paes e Doces - Repiso - Padaria e Confeitaria L"},{
            "name": "Emporio Saude - Emporio Saude Prod Med Ut Ltda"},{
            "name": "Italia Pao - Panificadora D Italia Rio Preto"},{
            "name": "Gouvea Alves Restaurante - Gouvea Alves Restaurante Ltda. -"},{
            "name": "Auto Posto Cecap - Autoposto Cecap Ltda"},{
            "name": "Sancos Pub Cafe - Marcos Jose Bizelli Domingues 78"},{
            "name": "Padaria e Conf Santos - Irmaos Bellini Ltda"},{
            "name": "La Em Casa Restaurante - Eleni Spacini Sj do Rio Preto Me"},{
            "name": "Mirai Restaurante - Barbosa e Hyashida Restaurante J"},{
            "name": "Panificadora - Fatareli & Linhares Panificadora"},{
            "name": "Hachi (Junior/Mauro) - A Martins & Santos Ltda Me"},{
            "name": "Casa de Carnes Rio Preto - Wilson Braz Vianna - Me"},{
            "name": "Delicias da Mama - Clarice Barreto da Silva"},{
            "name": "Veracci Pizza Pre Assa - Veracci Comercio de Pizzas M. L."},{
            "name": "Juan de Souza Cordeiro 407237018 - Juan de Souza Cordeiro 407237018"},{
            "name": "Juan de Souza Cordeiro 407237018 - Juan de Souza Cordeiro 407237018"},{
            "name": "Casa de Carnes Ideal - Casa de Carnes Ideal Rio Preto L"},{
            "name": "Torre Forte Refeicoes - Ean Camacho Refeicoes Me"},{
            "name": "Fricasse Restaurante - B C F Ferraz e Cia Ltda Me"},{
            "name": "Zahtar - Fernanda Nasser Me"},{
            "name": "Filial Rio Preto - Filial Rio Preto Gastronomia Eir"},{
            "name": "Osaca Sushi Bar Rio Preto - Toca do Gato Rio Preto Restauran"},{
            "name": "Zenaide Bini de Paula - Zenaide Bini de Paula - Me"},{
            "name": "Luiz Eduardo Pirola Me - Luiz Eduardo Pirola Me"},{
            "name": "Luiz Fernando de Sa Chocolates F - Luiz Fernando de Sa Chocolates F"},{
            "name": "Pao e Baguete - Boulangerie Saint Paul Comerci"},{
            "name": "Living Club - Scaran Eventos Ltda - Me"},{
            "name": "Pizzaria Bella Capri - Rp Norte Pizzaria e Rest Ltda"},{
            "name": "Armazem da Pizza - E.C. Guimaraes Pizzaria Me"},{
            "name": "Armazem da Pizzaria - E.C. Guimaraes Pizzaria - Me"},{
            "name": "Casa de Carnes Boi Rio - Kaio Vinicius Barbosa Rodrigues"},{
            "name": "Panificadora Eldorado - Panificadora Canesin Ltda"},{
            "name": "Verssuti & Dalto Restaurante - Verssuti & Dalto Restaurante Ltd"},{
            "name": "Nova Boi Na Brasa Chur - C L Zatti Churrascaria Me"},{
            "name": "Casa de Carne Santos Du - Ronaldo Castrequini Rio Preto M"},{
            "name": "Dionisio Paes e Doces Ltda - Dionisio Paes e Doces Ltda Me"},{
            "name": "Oda Japanese Food Restaurante - Oda Japanese Food Restaurante Lt"},{
            "name": "Divino Sabor - Parreira & Paz Comercio de Produ"},{
            "name": "Light Food - Light Food Rio Preto Alimentos E"},{
            "name": "Panificadora Santa Ana - M M Nogaroto Boiate Rio Preto Lt"},{
            "name": "Lanch Estrela Originai - Aparecida de Assis"},{
            "name": "Menina Moca - Rotisserie Menina Moca Rio Preto"},{
            "name": "Sinha Nega - Elen Carvalho Arruda da Silva 27"},{
            "name": "Mc Donalds Jrp - Adrea S Food Com de Alim Ltda"},{
            "name": "Isadora Cantero Lima & Cia - Isadora Cantero Lima & Cia Ltda"},{
            "name": "R. G. Rio Preto Restaurante Ltda - R. G. Rio Preto - Choperia e Res"},{
            "name": "Acai da Praia - Embapraia - Eireli - Me"},{
            "name": "Acai da Praia - Unidade Represa - Marques & Schimidinger Lanchonet"},{
            "name": "Jose Marcos Nogueira 4 - Jose Marcos Nogueira 4"},{
            "name": "Massas Valaretto - J. P. Nardin Nardin Ltda Me"},{
            "name": "Niko Niko - Sushimori & Cia. Ltda."},{
            "name": "Belissima Paes e Doces - L Buzon Padaria - Me"},{
            "name": "Vila Aurora - M. Moreira Bar - Me"},{
            "name": "Danke Chen - Me - Danke Chen - Me"},{
            "name": "Guaruja Auto Posto-Shell - Guaruja Andalo Auto Posto Ltda"},{
            "name": "Auto Posto Axr-Shell - Auto Posto Axr Ltda"},{
            "name": "Avenida Frangos - Avenida Frangos Rio Preto Ltda -"},{
            "name": "70 Graus - Valdecy Goncalves Filho Me"},{
            "name": "Emporio Natural - Emporio Natural Com Alim Ltda"},{
            "name": "Frangorett Comercio P. A. L. -. - Frangorett Comercio P. A. L. -."},{
            "name": "Conveniencia Tropical I - Jose Henrique Cocenzo Me"},{
            "name": "Burger King Shopping Cidade Nort - Bk Brasil Operacao Ass Rest S A"},{
            "name": "Griletto - Cidade Norte Grill Restaurante L"},{
            "name": "Mc Donalds Cno - Adrea S Food Com de Alim Ltda"},{
            "name": "Ragazzo - Cidade Norte Point Com Alim Ltda"},{
            "name": "Subway - R Berbert Alimentos"},{
            "name": "Serafim Restaurante - Serafim Restaurante Rio Preto Ei"},{
            "name": "Janiele Ferreira do Carmo 340469 - Janiele Ferreira do Carmo 340469"},{
            "name": "Rotisserie Costa - Jose Carlos Costa Rio Preto Me"},{
            "name": "Casa de Carnes Raiane - Casa de Carnes Raiane Ltda Me"},{
            "name": "Brazilian Convenience - Danilo Chiesa Me"},{
            "name": "Bella Capri - Darcy Oliveira Carvalho - Me"},{
            "name": "D Angelis -Cafe do Ponto - D Angelis Lanchonete Ltda"},{
            "name": "Molecaggio Pizzas - Molecaggio Pizzas Ltda Me"},{
            "name": "Rio Preto Food - Rio Preto Food Prod Alimenticios"},{
            "name": "Subway - R Berbert Alimentos"},{
            "name": "Maria S Restaurantes - W G Filho e Cia Ltda"},{
            "name": "Jin Jin - Lourdes Alvares Dias"},{
            "name": "Kopenhagen - Krip Chocolates Finos Ltda Me"},{
            "name": "Salvador Batista Dias - Me - Salvador Batista Dias Me"},{
            "name": "Subway Plaza Avenida Shopping - Rbm Restaurante Ltda Me"},{
            "name": "Estancia Caipira - Estancia Caipira Restaurante Ltd"},{
            "name": "Gibodo Buffet - Marcos Leandro Bizaio - Me"},{
            "name": "Florisvaldo Paquione - Florisvaldo Paquione - Me"},{
            "name": "Chale do Sabor - Chale do Sabor Rotisseria Ltda M"},{
            "name": "Dantas Pizzas e Lanches - Sergio Paulo Cesar Moraes M"},{
            "name": "Panificadora Alto Rio Preto - Panificadora e Casa de Carnes Al"},{
            "name": "Dom Martins Butiquim - Lucas M. da Silva Choperia e Res"},{
            "name": "Lucas M. da Silva Choperia e Res - Lucas M. da Silva Choperia e Res"},{
            "name": "Jose Carlos Martins Rio Preto Me - Jose Carlos Martins Rio Preto Me"},{
            "name": "Santograal Cafeteria e Convenien - Oziride Niobe Giacchetto Dos San"},{
            "name": "Molecaggio - Murilo Ribeiro Silva Me"},{
            "name": "Mousse Cafe - Mousse Cafe Rio Preto Ltda"},{
            "name": "De Camargo e Leite Ltda - De Camargo e Leite Ltda Me"},{
            "name": "Churrascaria Gaucha Ii - Churrascaria Conte Ltda"},{
            "name": "Ponto da Picanha - Valcir Chiesa Me"},{
            "name": "Gdg Comercio de Produtos Aliment - Gdg Comercio de Produtos Aliment"},{
            "name": "Mc Donalds Rpj - Arcos Dourados Com de Aliment Lt"},{
            "name": "Mama Mia Pizzeria - Paolo Ferreira Zanin Me"},{
            "name": "Zappas - Zappas Cafe Ltda Me"},{
            "name": "Casa de Galeazzi - Irineu David Sofia"},{
            "name": "Kipao Paes e Tentacoes - Padaria e Confeitaria Fuscaldo &"},{
            "name": "Panif e Conf Sta Paula - Lourenco e Ribeiro Panif Ltda Me"},{
            "name": "Casa do Peixe e Petisco - Lanchonete Castro Vermelho Ltda"},{
            "name": "Andressa M B Campos - Frios - Andressa Manfrim Brugnoli Campos"},{
            "name": "Casa Carnes Santa Paula - Emilio P Santos F Rio Preto Me"},{
            "name": "Bobs - Delicacy Comercio de Alimentos L"},{
            "name": "Burger King Shopp Plaza Avenida - Bk Brasil Operacao e Assessoria"},{
            "name": "Bushido - Sushirama Restaurante Ltda. Me"},{
            "name": "Cafe do Ponto - Pelaes Plaza Cafe Ltda Me"},{
            "name": "Divino Fogao - Fazenda Feliz Restaurante Ltda -"},{
            "name": "Ice Creamy Sorvetes - Kater & Calegari Ltda - Me"},{
            "name": "J. S. Pantano - Me - Js Pantano Me"},{
            "name": "Kiberama - N.T. Akad Restaurante - Me"},{
            "name": "Mc Donalds Rpa - Andrea4s Food Com de Alimen Ltda"},{
            "name": "Montana Grill - Newfram Comercio de Alimentos Lt"},{
            "name": "Pizza Hut - Tpfc Com de Alim Ltda"},{
            "name": "Ragazzo - Ponto Rio Preto Com Alim Ltda"},{
            "name": "Restaurante Tio Jaco - Soler e Reis Restaurente"},{
            "name": "Pelaes Belvedere - Pelaes Belvedere Comercio de Ali"},{
            "name": "Brasa Grill Restaurant - Brasa Grill Restaurante Ltda"},{
            "name": "Frigoboi - Frigoboi Com de Carnes Ltda"},{
            "name": "Padaria Veredas - Elizeo Lindolfo da Silva"},{
            "name": "Pastelaria Rezende - Kenya Rezende Liebana Me"},{
            "name": "Abdo Fast Food Rio Preto Ltda - Abdo S Lanches Rio Preto Lt"},{
            "name": "Pastelaria Rezende - K.R.L. Pastelaria Rio Preto Ei"},{
            "name": "Divert Festas - Ana Claudia Soares Pratis - Me"},{
            "name": "Clementim e Ribeiro Longo - Clementim e Ribeiro Longo Com De"},{
            "name": "Etelvina Pereira Dos Santos - Etelvina Pereira Dos Santos 0860"},{
            "name": "Servebem Refei Es - Servebem Refeicoes Eireli Me"},{
            "name": "Restaurante K Delicia - Juscineia C. S. Soares Me"},{
            "name": "Habibs - R Preto Ii Comercio de Aliemntos"},{
            "name": "Az Padaria - A Z & Z Padaria Ltda"},{
            "name": "Rotisserie da Sogra - Rotisserie da Sogra Rio Preto Ei"},{
            "name": "Conveniencia Tropical Ii - Jose Renato Maluf Cocenzo Me"},{
            "name": "Nayara Cristina da Silva Santos - Nayara Cristina da Silva Santos"},{
            "name": "Com Carnes Ipanema - Ivo Sagliano da Silva Me"},{
            "name": "Casa de Carne Merc Pantaneira - R da S Souza Me"},{
            "name": "Panificadora Bombocado - A. M. Braga Panificadora - Me"},{
            "name": "Nino Cozinha Afetiva - Levi Restaurantes Rio Preto Ltda"},{
            "name": "Westcafe - Westcafe Lanchonete e Cafe Eirel"},{
            "name": "Varanda Verde - Mauro Cury Mourao Eireli"},{
            "name": "Panif.E Mercearia St.Edvirgem - Favaro e Bueno Neto Ltda"},{
            "name": "Churrasc Ventos do Sul - Original Choperia Lanch Rp Ltda"},{
            "name": "Opendoor Conveniencia - Roxo Schiaratti e Cia Ltda Me"},{
            "name": "Roberto Carlos Bressaglia 646328 - Roberto Carlos Bressaglia 646328"},{
            "name": "Soubhia e Cury Refeicoes - Soubhia e Cury Refeicoes Ltda Me"},{
            "name": "Cafe . Com - Lucimar B. Faria - Me"},{
            "name": "Kalirani Refeicoes - Kalirani Refeicoes Ltda Epp"},{
            "name": "Griletto - Satiko e Faria Goill e Restauran"},{
            "name": "Casa Carne Novilho de Ouro - Marcos Augusto Zatti Me"},{
            "name": "Boca Dillos do Chef - Bastos Borim Ltda Me"},{
            "name": "Florita Cafe - Michel Auguste Cunrath - Me"},{
            "name": "Nikkey Sushi Bar - Restaurante Nikkey Rio Preto Ltd"},{
            "name": "C Batista Alimentos Eirele Epp - C Batista Alimentos Eireli Ep"},{
            "name": "Emporio Santa Terezinha - Estrp Comercio e Participacoes L"},{
            "name": "Gina Carla Prieto Maestra Me - Gina Carla Prieto Maestra Me"},{
            "name": "Outback Bz59 Sao Jose do Rio Pre - Outback Steakhouse Restaurantes"},{
            "name": "Restaurante Bushido - Restaurante Bushido Ltda. - Epp"},{
            "name": "Risotto Mix - Pereira & Dias Comercio de Alime"},{
            "name": "Via Frangos - Clara Maria T Okada Cia Ltda Me"},{
            "name": "Janielle Barbosa - Janielle Barbosa - Me"},{
            "name": "Nilton Albino Rosa Rio Preto Me - Nilton Albino Rosa-Rio Preto-Me"},{
            "name": "So Suco Wu Rio Preto Eireli Me - So Suco Wu Rio Preto Eireli Me"},{
            "name": "Restaurante Du Ceu - R V de Lima Restaurante Me"},{
            "name": "Rei do Mate - Lg Magri Rio Preto Ltda Me"},{
            "name": "Lagos Br Mania - Lagos Alimentos e Conveni Ncia L"},{
            "name": "Tio Jaco - Tio Jaco Rest Ltda Epp"},{
            "name": "Economique Gourme - G M Pequito - Me"},{
            "name": "Panificadora Giovana - Castro Miranda Panif Ltda Me"},{
            "name": "Janaina Vieira 38288316808 - Janaina Vieira 38288316808"},{
            "name": "Auto Posto Hipocampus-Shell - Auto Posto Mediani Pires Ltda"},{
            "name": "Karla Gabriela Frazatto Me - Karla Gabriela Frazatto Me"},{
            "name": "Sergio Lanches - Jadir Alcazas Gomes Lanchonete -"},{
            "name": "Beyrouth - S A Farhat Restaurante"},{
            "name": "Delicias Du Chef - Aac Comercio de Produtos Aliment"},{
            "name": "Delicias Du Chef - Mdg Com de Produtos Alimenticios"},{
            "name": "Posto Vista Alegre - Auto Posto Vista Alegre Rio Pret"},{
            "name": "Auto Posto Escala Ii - Auto Posto Escala Ii Ltda"},{
            "name": "Loja Escala 2 - L D N Arid Conveniencias Me"},{
            "name": "Rodrigo Hernandes da Silva 40056 - Rodrigo Hernandes da Silva 40056"},{
            "name": "Casa de Carne Roseiral - Abel Fabiano Filho"},{
            "name": "Mamis Gourmet - Mamis Gourmet Alimentacao Ltda -"},{
            "name": "Mc Donalds Drp - Adrea S Food Com de Alim Ltda"},{
            "name": "Emmanoel da Silva Padaria Me - Emmanoel da Silva Padaria - Me"},{
            "name": "Pizzaria Viva Noite - Ivanir Marangoni Delamura Me"},{
            "name": "Club Grill Restaurante - Club Cafe Grill Rest Cafe Ltda"},{
            "name": "Sinmibaldi Bar e Restaurante - Cristiano Sinmibaldi Eireli"},{
            "name": "Casa de Carnes Gourmet - Casa de Carnes Gourmet Ltda - Me"},{
            "name": "Emporio Luna - Lemos Fontes e Fontes Ltda Me"},{
            "name": "Zappas - Pratic Loja de Conveniencia Ltda"},{
            "name": "Tome Goncalves Salgado - Tome Goncalves Salgados Ltda Me"},{
            "name": "Real Pet - Cerealista Valadares Ltda Me"},{
            "name": "Mariana Ataides 37231475850 - Mariana Ataides 37231475850"},{
            "name": "Emporio Kazu - C. J. Ogawa & Cia. Ltda. - Me"},{
            "name": "P.Max Paes,Doces e Salgados - G. N. - Padaria e Confeitaria Lt"},{
            "name": "Jorge Henrique Amaral Alimentaca - Jorge Henrique Amaral Alimentaca"},{
            "name": "Pastelaria - C.H.L Silva Pastelaria - Me"},{
            "name": "Cleber Ferreira Bar - Cleber Ferreira Bar Me"},{
            "name": "Auto Posto Primavera - Auto Posto Primavera Murchid Ltd"},{
            "name": "Marambaia Conveniencia - Marambaia Conveniencia Rio Preto"},{
            "name": "Br Fitness Delivery - C K Alim Saudavel Ltda Epp"},{
            "name": "Villa Hortifruti - Hfbr Alim Eireli Me"},{
            "name": "Casa de Carne Claudinho - Casa de Carne do Claudinho Ltda"},{
            "name": "J. Antonio - J. Antonio da Silva Lanches - Me"},{
            "name": "Restaurante Garcia Machado Ltda - Restaurante Garcia Machado Ltd"},{
            "name": "Auto Posto Jk-Shell - Rio Petro Comb Lubr Servicos Ltd"},{
            "name": "Casa da Picanha - Lanc Casa da Picanha de R P L Me"},{
            "name": "Casa de Carnes St Isabel - Sidinei Jose de Araujo - Acougue"},{
            "name": "X Tudao :) - Uilson da Silva Bonfim - Me - Me"},{
            "name": "J A de S Resende - J A de S Rezende Rio Preto Me"},{
            "name": "Sr.Filet - Similar Casa de Carnes Limitada"},{
            "name": "Porcino Conveniencia - Mayte Dos Santos Porcino Me"},{
            "name": "Helio Falchi-Lanchonete - Helio Falchi-Lanchonete - Me"},{
            "name": "Gallo Serv Festas Bar - Gallo Serv Festas Bar Ltda Me"},{
            "name": "Madre Mia Pizzaria - Madre Mia Pizzaria Ltda - Me"},{
            "name": "Moacir Martins Ribeiro Filho Me - Moacir Martins Ribeiro Filho Me"},{
            "name": "S C de Morais - S. C. de Morais da Silva - Me"},{
            "name": "Posto Mc Jk - Auto Posto A R Z Ltda"},{
            "name": "R. Galhardo Restaurante Me - R. Galhardo Restaurante Me"},{
            "name": "Bobe - Delicacy Comercio de Alimentos L"},{
            "name": "Bushido - Bushisushi Restaurante Ltda. E"},{
            "name": "Choperia H2 Rio Preto - Choperia e Rest H2 R Preto Ltda"},{
            "name": "D King - D King Comercio de Alimentos Ltd"},{
            "name": "Divino Fogao - Viudes Comercio de Alimentos Ltd"},{
            "name": "Espagueto - Salvador Batista Dias Me"},{
            "name": "Everton - Everton Galhardo Patrizzi Me"},{
            "name": "Grao Expresso - Aline Henrique Alvares Ferreira"},{
            "name": "Griletto - Rp Grill Restaurante Ltda-Epp"},{
            "name": "Jin Jin - Jin Jin Comercial Sjrp Ltda"},{
            "name": "Kiberama I - Akad & Akad Ltda"},{
            "name": "Mc Donald S Lj Rps - Adrea S Food Com de Alim Ltda"},{
            "name": "Mjz Comercio de Alimentos Eireli - Mjz Com de Alim Eireli Me"},{
            "name": "Montana Grill - Newfram Comercio de Alimentos Lt"},{
            "name": "Roasted Potato - M.A.S. Manzano - Batatas - Epp"},{
            "name": "Samshi - Benedito Teixeira Neto Me"},{
            "name": "Starbucks - Starbucks Brasil Com de Cafes Lt"},{
            "name": "Lanchonete e Restauran - Lanchonete e Rest Cantinho do Ma"},{
            "name": "Patroni Premium - Fr Restaurante e Pizzaria Rio Pr"},{
            "name": "Doceria Schmidt - Elisete Carvalho Carmeloci Doces"},{
            "name": "Frangolango - Frango Lango Com de Frangos Ltda"},{
            "name": "Luiz Lanches - Luiz Donizete Morais 07385058892"},{
            "name": "Cafe Com Pao - Cafe Com Pao Padaria Rp Ltda Me"},{
            "name": "Rancho do Cupim - Sbd Bar e Restaurante Ltda Me"},{
            "name": "Casa de Carne Estoril - Marlei Angela da Silva Me"},{
            "name": "Rei da Esfiha - Nelzira Pinheiro da Silva Me"},{
            "name": "Frigo Marcussi - Deusdeti Marcussi Me"},{
            "name": "Restaurante Frutto - Derigge & Lago Restaurante Ltd"},{
            "name": "R. M. Cavalheiro Salgados e Su - R. M. Cavalheiro Salgados e Su"},{
            "name": "Tutu Lanches - L L Longo Mercearia Me"},{
            "name": "Casa do Cupim - Restaurante Merlo e Zenatti Ltda"},{
            "name": "Arnon Lanchonete Ltda - Me - Arnon Lanchonete Ltda - Me"},{
            "name": "Delicia Na Brasa - L. H. Michelan Rotisserie e Alim"},{
            "name": "Emporium Regina - V.R. de Abreu Kobayashi Rotisser"},{
            "name": "Farineli Paes e Doces - Farineli Paes e Doces Ltda Me"},{
            "name": "Claudimila Dias Dos Santos Me - Claudimila Dias Dos Santos Me"},{
            "name": "Gilson Bezerra de Souza Me - Gilson Bezerra de Souza Me"},{
            "name": "Casa de Carnes Campest - H B Canuto Acougue Me"},{
            "name": "Armazem Grindelia - Armazem e Restaurante Manzalli L"},{
            "name": "Via Grill - Bonkoski & Spielmann Restaurante"},{
            "name": "Oba Oba Acai - Godoi Oliveira Com de Sucos Ltda"},{
            "name": "Raimundo Aparecido Lima Me - Raimundo Aparecido Lima Me"},{
            "name": "Meister Burger - Js Foods Com de Alim Ltda Me"},{
            "name": "Padaria do Tim - Natalia de Almeida O Panificador"},{
            "name": "Cbds - Pc Martins Transporte Deo - Cbds - Pc Martins Transporte De"},{
            "name": "Zappas Cafe - Zappas Cafe Ltda Me"},{
            "name": "Osni Lanches - A F da S Campos Sj do R Preto Me"},{
            "name": "Loja de Conveniencia - Loja de Conveniencia Irmaos Zafa"},{
            "name": "Sabor Expresso Rio Preto Eireli - Sabor Expresso Rio Preto Eireli"},{
            "name": "J F R Paes e Doces - J F R Paes e Doces Ltda Me"},{
            "name": "Frios e Rotisseria da Mama - Cristiano de Oliveira Gaetan Rot"},{
            "name": "Caseiro Lanches - Jose Diorande Valadares Me"},{
            "name": "Carlos Mattos Pinheiro - Carlos Mattos Pinheiro Me"},{
            "name": "Posto Poti - Auto Posto Poti Ltda"},{
            "name": "Casa de Carne Luar - Paes & Silva Comercio de Carnes"},{
            "name": "Sergio Luis de Almeida - Sergio Luis de Almeida"},{
            "name": "Casa de Portugal - Moreira e Souza Rio Preto Rest"},{
            "name": "Sorveteria Cuca Fresca - Daniel Geans de Oliveira - Me"},{
            "name": "Tapi da Ray - Tapi da Ray Ltda Me"},{
            "name": "Villa Per Tutti Conven - Vivendas Loja Conveniencias Ltda"},{
            "name": "Bk Carrefour Sjrp - Bk Brasil Operacao Ass Rest S A"},{
            "name": "Marlu Zanon Rotisserie S B - Marlu Zanon Rotisserie S B Ltda"},{
            "name": "Franciscanorestaurante - Mathila Rio Preto Restaurante Lt"},{
            "name": "Pizzaria do Branco - A C de Medeiros Pizzaria"},{
            "name": "Casa de Carnes do Ma2 - Cecchin Reis Ltda Me"},{
            "name": "Maria de F B Cabral - Maria de Fatima Batista Cabral M"},{
            "name": "Rotisserie Lm - Rotisserie Lm Pdv 02 Eireli Me"},{
            "name": "Bosque Das Vivendas Conveniencia - Bosque Das Vivendas Conveniencia"},{
            "name": "Cefeteria Jardim da Paz - Luzilene Brandao 10282622802"},{
            "name": "Posto Vivendas - Auto Posto Vivendas Rio Preto Lt"},{
            "name": "R. Luiz Padaria Me - R. Luiz Padaria Me"},{
            "name": "Restaurante Puro Sabor Ltda - Hedio Wilson da Silva Me"},{
            "name": "Panificad. Pao da Hora - Panificadora Irmaos T Ltda"},{
            "name": "Serv Festas Martins - Serv Festas Martins & Pereira Lt"},{
            "name": "Sirius Restaurante - Cristiane A. Cavaletti Campisi"},{
            "name": "Yostsui - Yostsui e Duarte Ltda Me"},{
            "name": "Casa de Carnes Dois Irmaos - R A Maino e Companhia Limitada"},{
            "name": "Posto Mc Norte - Posto Monte Carlo Norte Ltda"},{
            "name": "Eunice de Fatima Fernandes da Cr - Eunice de Fatima Fernandes da Cr"},{
            "name": "Minimercado Duponto - Edna Aparecida de Oliveira Irani"},{
            "name": "Mercado Cristo Rei - Jose Fernandes Martines Rio Pret"},{
            "name": "Ponto do Cafe - Emerson Campisi Me"},{
            "name": "Expresso Pao de Queijo - Expresso Pao de Queijo Limitada"},{
            "name": "Maria Jose Arioza Fogarolli Me - Maria Jose Arioza Fogarolli Me"},{
            "name": "Montana Grill Express - Dumolina Foods Eireli - Me"},{
            "name": "Jockey Clube - Mercearia Jockey Clube Rio Preto"},{
            "name": "A F M Conveniencia - Aparecida Fumiyo Martins Me"},{
            "name": "Morada do Sol - Lanchonete Morada do Sol R Preto"},{
            "name": "Zappas Lj 2 - Pratic Lojas de Conveniencia Lt"},{
            "name": "Posto Mc Iguatemi - Monte Carlo e Conveniencia Iguat"},{
            "name": "Sao Luis Panif e Confe - Fernando Henrique Migliole"},{
            "name": "Marcos e de Souza Me - Marcos Elias de Souza - Me"},{
            "name": "Casa Carnes Sao Jose - Rodrigues e Camillo Rio Preto Lt"},{
            "name": "Viana Restaurante - Mauricio da Silva Viana Me"}];

       function getEstabelecimento() {
           document.getElementById('resultado').innerHTML = ''
           var busca = document.getElementById('busca').value;
           console.log(busca);
           var results =  data.filter(
                function(data) {
                    return data.name.toLowerCase().match(busca.toLowerCase());
                }
            );
           for (var a in results) {

               document.getElementById('resultado').innerHTML += results[a].name + '\n<br/>';
           }
        }
        document.getElementById('btnBusca').onclick = getEstabelecimento;


        /*
         var found = getCountryByCode('DZ');

         console.log(found);
        console.log(found[0].name);
        console.log(data);
        //document.getElementById('output').innerHTML = found[0].name;
        */
    }
};
