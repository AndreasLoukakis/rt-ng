$( document ).ready(function() {
    console.log('executing script');
    checkWip();

    $("body").on('DOMSubtreeModified', ".current", function(event) {
        event.preventDefault();
        checkWip();
     });

    function checkWip() {
        const overIndexes = [];

        $('.agile-board .cell.inprogress').each(function(index, cell){
            const current = $(cell).find('.boards-controls-limit span.current');
            const limit = $(cell).find('.boards-controls-limit span.limit');

            if (current.length && limit.length){
                if (+current.html() > +limit.html()) {
                    $(this).css('background', 'red');
                    overIndexes.push(index);
                } else {
                    $(this).css('background', 'inherit');
                }
            }

            setSwimLanesBg(overIndexes);
        })
    }

    function setSwimLanesBg(indexesArray) {
        $('.cell.member-content.swimlanes .member-vertical').each(function(i, lane) {
            $('.cell.member-content', lane).each(function(colidx, col) {
                if (indexesArray.indexOf(colidx) > -1) {
                    $(col).css('background', 'red');
                } else {
                    $(col).css('background', 'inherit');
                }
            })
        })
    }

    



    $('.agile-board .horizontal .horizontal-table .member.board-column-header')
        .css({fontWeight: 900, fontSize: '1.4em'});
        
        $('.main-container').prepend('<button id="triggercusotm">click this reee</button>')
        $('body').click('#triggercusotm', calcHistory)
    
    function calcHistory() {
        console.log('calc history')
        $('.history-focus-outline.history-item-summary-text').each(function(index){
        });
    }
    
    $("body").on('DOMSubtreeModified', ".current", function(event) {
        // console.log('current changed to ', event.target.textContent)
        if( $(this).parent().parent().hasClass('exceed') ) {
            alert('re papara to gamises')
            event.preventDefault();
            // get the index
            let parent = $(this).parent().parent().parent();
            let index =  $('.cell.inprogress').index(parent); // $('.cell.inprogress').index(parent)
            $('.cell.member-content.member.content.inprogress').each(
                function(idx, item) { 
                    if (idx === index) {
                        $(item).css('background', 'red');
                        // console.log(item)
                    } else {
                        $(item).css('background', 'inherit')
                    }
                }
            );
        }
    });
        
});
