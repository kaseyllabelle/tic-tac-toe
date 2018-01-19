var xo;

function startGame(){
	let xo;
	$('div[class*="col"]').html('&nbsp;');
	$('div[class*="col"]').click(function(){
		turn($(this));
	});
}

function turn(cell){
	if($(cell).html() !== '&nbsp;'){
		return
	}
	xo = (xo && ~xo.indexOf('alt="x"')) ? `<img src="images/o.png" alt="o">` : `<img src="images/x.png" alt="x">`
	$(cell).html(xo);
	win();
}

function win(){
	if( $('.row-1 .col-1 img').attr('alt') === 'x' && $('.row-1 .col-2 img').attr('alt') === 'x' && $('.row-1 .col-3 img').attr('alt') === 'x' || 
		$('.row-2 .col-1 img').attr('alt') === 'x' && $('.row-2 .col-2 img').attr('alt') === 'x' && $('.row-2 .col-3 img').attr('alt') === 'x' || 
		$('.row-3 .col-1 img').attr('alt') === 'x' && $('.row-3 .col-2 img').attr('alt') === 'x' && $('.row-3 .col-3 img').attr('alt') === 'x' || 
		$('.row-1 .col-1 img').attr('alt') === 'x' && $('.row-2 .col-1 img').attr('alt') === 'x' && $('.row-3 .col-1 img').attr('alt') === 'x' || 
		$('.row-1 .col-2 img').attr('alt') === 'x' && $('.row-2 .col-2 img').attr('alt') === 'x' && $('.row-3 .col-2 img').attr('alt') === 'x' || 
		$('.row-1 .col-3 img').attr('alt') === 'x' && $('.row-2 .col-3 img').attr('alt') === 'x' && $('.row-3 .col-3 img').attr('alt') === 'x' || 
		$('.row-1 .col-1 img').attr('alt') === 'x' && $('.row-2 .col-2 img').attr('alt') === 'x' && $('.row-3 .col-3 img').attr('alt') === 'x' || 
		$('.row-3 .col-1 img').attr('alt') === 'x' && $('.row-2 .col-2 img').attr('alt') === 'x' && $('.row-1 .col-3 img').attr('alt') === 'x'){
		return alert('x wins!');
	}
	if( $('.row-1 .col-1 img').attr('alt') === 'o' && $('.row-1 .col-2 img').attr('alt') === 'o' && $('.row-1 .col-3 img').attr('alt') === 'o' || 
		$('.row-2 .col-1 img').attr('alt') === 'o' && $('.row-2 .col-2 img').attr('alt') === 'o' && $('.row-2 .col-3 img').attr('alt') === 'o' || 
		$('.row-3 .col-1 img').attr('alt') === 'o' && $('.row-3 .col-2 img').attr('alt') === 'o' && $('.row-3 .col-3 img').attr('alt') === 'o' || 
		$('.row-1 .col-1 img').attr('alt') === 'o' && $('.row-2 .col-1 img').attr('alt') === 'o' && $('.row-3 .col-1 img').attr('alt') === 'o' || 
		$('.row-1 .col-2 img').attr('alt') === 'o' && $('.row-2 .col-2 img').attr('alt') === 'o' && $('.row-3 .col-2 img').attr('alt') === 'o' || 
		$('.row-1 .col-3 img').attr('alt') === 'o' && $('.row-2 .col-3 img').attr('alt') === 'o' && $('.row-3 .col-3 img').attr('alt') === 'o' || 
		$('.row-1 .col-1 img').attr('alt') === 'o' && $('.row-2 .col-2 img').attr('alt') === 'o' && $('.row-3 .col-3 img').attr('alt') === 'o' || 
		$('.row-3 .col-1 img').attr('alt') === 'o' && $('.row-2 .col-2 img').attr('alt') === 'o' && $('.row-1 .col-3 img').attr('alt') === 'o'){
		return alert('o wins!');
	}
	let isTie = true;
	$('div[class*="col"]').each(function(){
		if($(this).html() === '&nbsp;'){
			isTie = false;
		}
	})
	if(isTie){
		return alert(`it's a tie!`);
	}
}

startGame();