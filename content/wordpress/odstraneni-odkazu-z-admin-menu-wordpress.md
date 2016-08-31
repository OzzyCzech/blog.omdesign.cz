---
title: Odstranění odkazů z admin menu Wordpress
date: 2011-09-11
tags: [wordpress]
---


# Odstranění odkazů z admin menu Wordpress

Pro [manažer odkazů](http://codex.wordpress.org/Links_Manager) #wordpress jsem nenašel nikdy **smysluplné využití**. Proč ho rovnou z menu neodstranit? Stejně tam jen zavazí:


    add_action('admin_menu', function(){
      remove_menu_page('link-manager.php');
    });


 Obdobně je možné odstranit cokoliv dalšího např. `remove_menu_page('edit-comments.php');` - odstraní odkaz na komentáře.