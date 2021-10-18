var cat_url = `https://jsonkeeper.com/b/C0GU`;

async function getCategory() {
  var response = await fetch(cat_url);
  var data = await response.json();
  console.log(data);
}
