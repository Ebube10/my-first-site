let score = document.getElementById("scores")

function todayMatch() {
    score.innerHTML = `
<table class="table">
                        <thead class="thead-light">
                            <tr id="col">
                                <th scope="col">LEAG</th>
                                <th scope="col">MATCH</th>
                                <th scope="col">TIPS</th>
    
                            </tr>
    
                        </thead>
    
                        <tbody>
                            <tr>
                                <th data-title="Sir.no" scope="row">ECL <span id="time">19:30</span></th>
    
                                <td data-title="sir, no">Celje <span id="vs">VS</span> Maccabi Tel Aviv</td>
                                <td data-title="sir, no">HT0.5</td>
    
    
                            </tr>
                            <tr>
                                <th data-title="Sir.no" scope="row">ECL <span id="time">19:30</span></th>
                                </th>
                                <td data-title="sir, no">BATE <span id="vs">VS</span> FC Ballkani</td>
                                <td data-title="sir, no">1x</td>
    
    
                            </tr>
                            <tr>
                                <th data-title="Sir.no" scope="row">UEL <span id="time">19:30</span></th>
                                </th>
                                <td data-title="sir, no">Zorya Luhansk <span id="vs">VS</span> Slavia Prague</td>
                                <td data-title="sir, no">x</td>
    
                            </tr>
                            <tr>
                                <th data-title="Sir.no" scope="row">ECL <span id="time">19:30</span></th>
                                </th>
                                <td data-title="sir, no">Ferencvaros <span id="vs">VS</span> Zalgiris</td>
                                <td data-title="sir, no">2x</td>
    
                            </tr>
                            <tr>
                                <th data-title="Sir.no" scope="row">ECL <span id="time">19:30</span></th>
                                </th>
                                <td data-title="sir, no">Bodo/Glimt <span id="vs">VS</span> Sepsi Sf. Gheorghe</td>
                                <td data-title="sir, no">1</td>
    
                            </tr>
                            <tr>
                                <th data-title="Sir.no" scope="row">ARM <span id="time">19:30</span></th>
                                </th>
                                <td data-title="sir, no">Shirak Gyumri <span id="vs">VS</span> Alashkert</td>
                                <td data-title="sir, no">2x</td>
                            </tr>
                        </tbody>
                    </table>
`


}
function yesterter() {
    score.innerHTML = `
<h3> .........</h3>
`


}
function Tomorrowmatch() {
    score.innerHTML = `
<div class="comback-cont">
<p class="comeback"> WE ARE YET TO ADD GAMES FOR TOMORROW. PLEASE CHECK BACK!</p>
</div>
`
}
todayMatch()

