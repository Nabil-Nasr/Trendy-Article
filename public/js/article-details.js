let deleteArticle=document.querySelector(`button[data-article-id]`)

let articleID=deleteArticle.getAttribute("data-article-id")

deleteArticle.addEventListener("click", () => {
    fetch(`/all-articles/article-details/${articleID}`,{method:"DELETE"})
    .then(response=>response.json())
    .then(data=>{
        // this will work only if in app.delete()
        //  we used res.json({link:"/all-articles"}) instead of res.redirect("/all-articles")
        // we can delete {link:"/all-articles"} above
        // and write custom location here in front-end
        location.pathname=data.redirectionLink;
    })
    .catch(err=>console.log(err))
    
})

