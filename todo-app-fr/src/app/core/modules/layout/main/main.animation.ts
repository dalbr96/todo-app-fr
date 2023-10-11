import { animate, state, style, transition, trigger } from "@angular/animations";

const expandedMenuState = state("expanded", style({
    display: 'block',
    height: '100vh',
    opacity: '1'
}))

const collapsedMenuState = state("collapsed", style({
    opacity: '0',
    display: 'none'
}))

const closeNavbarTransition = transition('expanded => collapsed', [
    animate(200)
])

const openNavbarTransition = transition('collapsed => expanded', [
    animate(200)
])

export const navbarAnimation = trigger('expand', [expandedMenuState, collapsedMenuState, closeNavbarTransition, openNavbarTransition]);

const visibleMenu = state("unrotated", style({
    display: 'block'
}))

const hiddenMenu = state("rotated", style({
    transform: 'rotate(90deg)'
}))

const menuClicked = transition('unrotated => rotated', [
    animate(200)
])

const menuClosed = transition('rotated => unrotated', [
    animate(200)
])

export const menuAnimation = trigger('click', [visibleMenu, hiddenMenu, menuClosed, menuClicked]);