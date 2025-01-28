
    // Données initiales
    let produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 }
    ];

    // Affichage des produits
    function afficherProduits(listeProduits) {
    const tbody = document.getElementById('productList');

    // Utilisation de map pour créer les lignes du tableau
    tbody.innerHTML = listeProduits.map(produit => `
                <tr>
                    <td>${produit.nom}</td>
                    <td>${produit.prix.toFixed(2)} €</td>
                    <td>
                        <button
                            onclick="supprimerProduit(${produit.id})"
                            class="delete"
                        
                        >
                        supprimer
                        </button>
                    </td>
                </tr>
            `).join('');

    // Calcul et affichage du total avec reduce
    const total = listeProduits.reduce((sum, produit) => sum + produit.prix, 0);
    document.getElementById('total').textContent =
    `Total : ${total.toFixed(2)} €`;
}

    // Filtrage des produits
    function filtrerProduits(motCle) {
    // Utilisation de filter pour la recherche
    const produitsFiltres = produits.filter(produit =>
    produit.nom.toLowerCase().includes(motCle.toLowerCase())
    );
    afficherProduits(produitsFiltres);
}

    // Suppression d'un produit
    function supprimerProduit(id) {
    produits = produits.filter(produit => produit.id !== id);
    afficherProduits(produits);
}

    // Réinitialisation
    function reinitialiser() {
    document.getElementById('searchInput').value = '';
    afficherProduits(produits);
}

    // Écouteur d'événement pour la recherche
    document.getElementById('searchInput').addEventListener('keyup', (e) => {
    filtrerProduits(e.target.value);
});

    // Affichage initial
    afficherProduits(produits);
