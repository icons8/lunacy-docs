var rootPath = new DirectoryInfo(AppContext.BaseDirectory).Parent!.Parent!.Parent!.Parent!.FullName;
string[] optionalPages = ["contact.md", "localization.md", "troubleshooting.md", "subscriptions.md"];
//clear raw folder
var rawPath = Path.Combine(rootPath, "docs", "raw");
var llmsPath = Path.Combine(rootPath, "docs", "llms.txt");
var llmsContent = """
# Lunacy

> A collaborative design tool with built-in graphics, offline mode, and private cloud options. Runs on Windows, MacOS, and Linux.


## Docs

""";
var llmsOptional = """


## Optional

""";
if (Directory.Exists(rawPath))
{
    foreach (var path in Directory.GetFiles(rawPath))
    {
        File.Delete(path);
    }
}
else
{
    Directory.CreateDirectory(rawPath);
}

//get md files
var mdFiles = Directory.GetFiles(rootPath, "*.md", SearchOption.AllDirectories)
    .Where(x => !x.EndsWith("README.md") && !x.EndsWith("rn_private_cloud.md") && !x.EndsWith("creating_private_cloud.md"))
    .ToArray();
foreach (var path in mdFiles)
{
    var content = File.ReadAllText(path);

    if (content.StartsWith("---"))
    {
        var endIndex = content.IndexOf("---", 100);
        var headerLines = content.Substring(0, endIndex).Split(Environment.NewLine, StringSplitOptions.RemoveEmptyEntries);
        var header = headerLines.First(x => x.StartsWith("title:"));
        header = header.Substring(header.IndexOf(':') + 2);
        var description = headerLines.First(x => x.StartsWith("description:"));
        description = description.Substring(description.IndexOf(':') + 2);

        content = content.Substring(endIndex + 4);
        content = "# " + header + Environment.NewLine + Environment.NewLine + 
                  "> " + description + Environment.NewLine + Environment.NewLine +
                  content;

        if (optionalPages.Contains(Path.GetFileName(path)))
        {
            llmsOptional += Environment.NewLine + "- [" + header.Trim() + "](https://lunacy.docs.icons8.com/raw/" +
                            Path.GetFileName(path) + "): " + description.Trim() + ".";
        }
        else
        {
            llmsContent += Environment.NewLine + "- [" + header.Trim() + "](https://lunacy.docs.icons8.com/raw/" +
                           Path.GetFileName(path) + "): " + description.Trim() + ".";
        }
    }
    
    const string pattern = @"https://lunacy\.docs\.icons8\.com/([^/]+)/";
    const string replacement = @"https://lunacy.docs.icons8.com/raw/$1.md";
    content = System.Text.RegularExpressions.Regex.Replace(content, pattern, replacement);
    
    File.WriteAllText(Path.Combine(rawPath, Path.GetFileName(path)), content);
}

File.WriteAllText(llmsPath, llmsContent + llmsOptional);