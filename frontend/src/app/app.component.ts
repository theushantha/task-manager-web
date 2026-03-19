import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'task-manager-web';
  isRouteTransitioning = false;

  private readonly minTransitionDurationMs = 360;
  private transitionStartTime = 0;
  private transitionToken = 0;
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.transitionToken += 1;
        this.transitionStartTime = Date.now();
        this.isRouteTransitioning = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.completeTransition(this.transitionToken);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private completeTransition(token: number): void {
    const elapsedMs = Date.now() - this.transitionStartTime;
    const remainingMs = Math.max(this.minTransitionDurationMs - elapsedMs, 0);

    window.setTimeout(() => {
      if (token === this.transitionToken) {
        this.isRouteTransitioning = false;
      }
    }, remainingMs);
  }
}
