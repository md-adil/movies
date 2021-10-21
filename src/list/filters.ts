export const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
].map((x) => ({ label: x, value: x }));

export const qualities = ["720P", "1080P", "2160P", "3D"].map((x) => ({ label: x, value: x.toLowerCase() }));

export const sorts = [{ label: "Date Added", value: "dateadded" }, "Title", "Year", { label: "Popularity", value: "seeds" }].map((x) =>
    typeof x === "string" ? { label: x, value: x.toLowerCase() } : x
);

export const keys = ["genre", "quality", "sort", "keywords"] as const;
