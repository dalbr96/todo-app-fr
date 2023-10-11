import { animate, state, style, transition, trigger } from "@angular/animations";

const expandedMenuState = state("expanded", style({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#213435',
    height: '100vh',
    opacity: '1'
}))

const collapsedMenuState = state("collapsed", style({
    opacity: '0',
    display: 'none'
}))


const closeNavbarTransition = transition('expanded => collapsed', [
    animate('1s')
])

const openNavbarTransition = transition('collapsed => expanded', [
    animate('1s 500ms ease-in')
])

export const navbarAnimation =  trigger('expand', [expandedMenuState, collapsedMenuState, closeNavbarTransition, openNavbarTransition]);

const visibleMenu = state("visible", style({
    display: 'flex',
    height: '100%',
    marginRight: '0.5rem'
}))

const hiddenMenu = state("hidden", style({
    opacity: '0',
    display: 'none'
}))

const menuClicked = transition('hidden => visible', [
    animate('500ms 1s ease-in')
])

const menuClosed = transition('visible => hidden', [
    animate(500)
])

export const menuAnimation =  trigger('click', [visibleMenu, hiddenMenu, menuClosed, menuClicked]);