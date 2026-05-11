const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "media": "media" });
  eleventyConfig.addPassthroughCopy({ "style": "style" });
  // Custom domain file for GitHub Pages
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  // Expose license files as plain text at /licenses/
  eleventyConfig.addPassthroughCopy({
    "LICENSE-Software": "licenses/agpl-3.0.txt",
  });
  eleventyConfig.addPassthroughCopy({
    "LICENSE-Media": "licenses/cc-by-nc-sa-4.0.txt",
  });

  // Shortcode to embed a license file as plain text in HTML
  eleventyConfig.addShortcode("licenseText", function (filename) {
    const filepath = path.join(__dirname, filename);
    const text = fs.readFileSync(filepath, "utf8");
    // Escape HTML entities
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="license-text">${escaped}</pre>`;
  });

  // Filter: check if a URL starts with a prefix (for active nav state)
  eleventyConfig.addFilter("startsWith", function (str, prefix) {
    return typeof str === "string" && str.startsWith(prefix);
  });

  // Filter: get the year from a date
  eleventyConfig.addFilter("year", function (date) {
    return new Date(date).getFullYear();
  });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../src/_includes",
      data: "../src/_data",
      layouts: "../src/_includes/layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
