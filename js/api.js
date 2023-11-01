// const url = 'https://jio-saavan-unofficial.p.rapidapi.com/getsong' ; 
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '985bcbc6eamsh3a20b86ffab4882p16dc2djsn3ef5e1f81dae',
// 		'X-RapidAPI-Host': 'jio-saavan-unofficial.p.rapidapi.com'
// 	},
// 	body: {
// 		encrypted_media_url: 'ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBlrJGTfFbyAhRCAkx//LGIlozHj/EqcPOiQvaQf6g3CFte9EDf+yEhw7tS9a8Gtq'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);

// } catch (error) {
// 	console.error(error);
// }

fetch('https://jio-saavan-unofficial.p.rapidapi.com/getsong')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Use the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Fetch error:', error);
  });
