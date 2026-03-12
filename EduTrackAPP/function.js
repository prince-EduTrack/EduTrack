function mainscreen() {
    document.body.innerHTML = `
        
    <div class="edu">
    <p>EduTrack</p>
    </div>

   <div class="button-center">
        <button class="log-button" onclick="gotologin()">
            Log In
        </button>

        <button class="sign-button" onclick="gotosignin()">
            Sign Up
        </button>
        </div>
    `;
}


function gotologin() {
    document.body.innerHTML = `
    <div class="edu">    
    <p>
    Log in
    </p>
    </div>

        <div class="log">
        <input type="email" 
        placeholder="Enter your Gmail">
        <input type="password"
        placeholder="Enter Password">
        <button>
            Log In
        </button>
        <button onclick="mainscreen()">
            Back
        </button>
        </div>
    `;
}


function gotosignin() {
    document.body.innerHTML = `
        
    <div class="edu">
    <p>
    Sign In
    </p>
</div>

<div class="newacc">
        <input type="name"
        placeholder="Enter Your Name">
        <input type="email" 
        placeholder="Enter your Gmail">
        <button>
        <input type="password"
        placeholder="create Password">
        <button onclick="studentinfo()">    
        Create Account
        </button>
        </button>

        <button onclick="mainscreen()">
            Back
        </button>
        </div>
    `;
}


function studentinfo() {
    document.body.innerHTML = `
    <input type="name"
        placeholder="Enter Your Name">
        <input type="age"
        placeholder="Enter Your age">
        <input type="birth"
        placeholder="Enter Your birthday">
        

    
    
    `;
}