let appHeader = `
            <h1>Website For The TypeScript Language</h1>
            <h2>CS-354 Programming Languages</h2>
                <?php 
                    include 'GLOBALheader.php';
                    echo $a
                ?>
            <nav>
                <!--Insert links to website pages into the 'href' value.-->
                <h1>Website Pages:</h1>
                <a href="#">Home</a>
                <a href="../html/LanguageBackground.html">History of TypeScript</a>
                <a href="../html/TechnicalSetup.html">TypeScript Setup Help</a>
                <a href="../html/Resources.html">General Resources</a>
                <a href="../html/helloWorldExample.html">Example 1: Hello World</a>
                <a href="../html/typeUsageExample.html">Example 2: TypeScript Typing</a>
                <a href="../html/evenOddExample.html">Example 3: Even-Odd</a>
                <a href="../html/fibonacciExample.html">Example 2: Fibonacchi</a>
                <a href="../html/duckTypingExample.html">Example 3: </a>
                <a href="../html/mashExample.html">Example 4: M.A.S.H</a>
                <a href="../html/editDistanceExample.html">Example 5: The Edit Distance Problem</a>
            </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;