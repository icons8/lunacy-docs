( function( $ ) {
	'use strict';

	// Reduce
	$.fn.reduce = function( fnReduce, initialValue ) {
		var values = this,
				previousValue = initialValue;

		values.each( function( index, currentValue ) {
			previousValue = fnReduce.call(
				currentValue,

				previousValue,
				currentValue,
				index,
				values
			);
		} );

		return previousValue;
	};

	// Title sections
	$( ':header[id]' ).each( function() {
		var $self = $( this );

		$self.html(
			'<a href="#' + $self.attr( 'id' ) + '" class="title-anchor-link">#</a> ' + $self.html()
		);
	} );

	var getHeadingLevel = function( $el ) {
		var tagName = $el.prop( 'tagName' ).toLowerCase();

		if (
			! tagName ||
			[ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ].indexOf( tagName ) === -1
		) {
			return false;
		}

		return parseInt( tagName.replace( 'h', '' ), 10 );
	};

	var headings = $( ':header[id]' ).reduce( function( previousValue, currentValue ) {
		var currentHeading = {
			childrens: [],
		};

		currentHeading.$el = $( currentValue );
		currentHeading.level = getHeadingLevel( currentHeading.$el );

		if ( ! currentHeading.$el.length || currentHeading.level === false ) {
			return previousValue;
		}

		previousValue.push( currentHeading );

		return previousValue;
	}, [] );

	var majik = function( previousValue, currentHeading ) {
		if ( ! currentHeading.$el.length || currentHeading.level === false ) {
			return previousValue;
		}

		if ( previousValue.length < 1 ) {
			return [ currentHeading ];
		}

		var previousHeadingLevel = previousValue[ previousValue.length - 1 ].level;

		if ( currentHeading.level > previousHeadingLevel ) {
			previousValue[ previousValue.length - 1 ].childrens.push( currentHeading );
		} else {
			previousValue.push( currentHeading );
		}

		return previousValue;
	};

	var reduceLevels = function( list ) {
		list = list.reduce( majik, [] );

		var i;
		for ( i = 0; i < list.length; i += 1 ) {
			if ( ! list[ i ].childrens || ! list[ i ].childrens.length ) {
				continue;
			}

			list[ i ].childrens = reduceLevels( list[ i ].childrens );
		}

		return list;
	};

	var generateList = function( list, isFirstLevel ) {
		var $ul = $( '<ul></ul>' );
		$ul.addClass( 'level-' + list[ 0 ].level );

		if ( true === isFirstLevel ) {
			$ul.addClass( 'nav' );
		}

		var i, $li;
		for ( i = 0; i < list.length; i += 1 ) {
			$li = $( '<li></li>' );
			$li.append(
				'<a href="#' + list[ i ].$el.attr( 'id' ) + '" onclick="clickSingleA(this)">' +
					list[ i ].$el.text().replace( /^#\ /, '' ) +
				'</a>'
			);

			if (  list[ i ].level < 3 && list[ i ].childrens && list[ i ].childrens.length ) {
				$li.append( generateList( list[ i ].childrens ) );
				$li.addClass( 'has-submenu' );
			}

			$ul.append( $li );
		}

		return $ul;
	};

	if ( headings.length ) {
		headings = reduceLevels( headings );

		generateList( headings, true ).appendTo( '.js-sections' );
		var ghButtonHtml = "<a href='https://github.com/icons8/lunacy-docs' id='sections-button' class='btn btn--dark btn--rounded btn--w-icon btn--github js-affix'><i class='icon icon--github' style='float: left; margin-left: 0px; margin-right: 16px'></i>Suggest Edits</a>";
		var ghButton = $.parseHTML(ghButtonHtml);
		$('.js-sections').append(ghButton);
	}

	// Smooth anchor scrolling
	var $jsSmoothScroll = $( '.js-smooth-scroll' );

	$jsSmoothScroll.click( function() {
		$( 'html, body' ).animate( {
			scrollTop: $( $( this ).attr( 'href' ) ).offset().top
		}, 1200 );

		return false;
	} );

	var handleSectionsListSize = function() {
		$( '.sections-list' ).css( 'width', $( '.sections-list-wrapper' ).width() );
	};

	handleSectionsListSize();
	$( window ).on( 'resize', handleSectionsListSize );

	// Affix init
	$( window ).on( 'load', function() {
		$( '.js-affix' ).affix( {
			offset: {
				top: function() {
					return (
						this.top = $( '.hero-subheader' ).outerHeight( true ) + 100
					);
				},
				bottom: function() {
					return (
						this.bottom = $( '.js-footer-area' ).outerHeight( true ) + 80
					);
				}
			}
		} );
	} );

	$(document).ready(function() {
		// get current URL path and assign 'active' class
		var pathname = window.location.pathname;
		if(pathname === "/release-notes/")
			$('.site-header__nav > li > a[href="'+pathname+'"]').parent().addClass('active');
		else{
			$('.site-header__nav > li > a[href="/"]').parent().addClass('active');
		}
	})
	 
	// Offcanvas
	$( '.offcanvas-toggle' ).on( 'click', function() {
		$( 'body' ).toggleClass( 'offcanvas-expanded' );
	} );
}( jQuery ) );


function clickSingleA(a)
{
    items = document.querySelectorAll('a.active');

    if(items.length) 
    {
        items[0].className = '';
    }

    a.className = 'active';
}

function openModal()
{
	document.querySelector(".close-modal").style.display = "inline-block"
	document.querySelector(".burger-modal").style.display = "flex"
}

function closeModal()
{
	document.querySelector(".burger-modal").style.display = "none"
	document.querySelector(".close-modal").style.display = "none"
}