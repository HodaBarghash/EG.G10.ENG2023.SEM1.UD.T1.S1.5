function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iQr3nVnXQv":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v24q1attempts:player.GetVar("v24q1attempts"),v24q1answeredcorrect:player.GetVar("v24q1answeredcorrect"),v24q2attempts:player.GetVar("v24q2attempts"),v24q2answeredcorrect:player.GetVar("v24q2answeredcorrect"),v24q3attempts:player.GetVar("v24q3attempts"),v24q3answeredcorrect:player.GetVar("v24q3answeredcorrect")})
	}
	)
}

